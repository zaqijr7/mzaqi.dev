import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import response from "@utils/response";
import { searcUserbyUsername, registeringUser } from "@lib/models/users";

const APP_KEY = process.env.APP_KEY;

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await searcUserbyUsername(username);
    if (user.length) {
      console.log("masuk");
      const userExist = user[0];
      const compare = await bcrypt.compare(password, userExist.password);
      console.log(compare);
      if (compare) {
        const token = jwt.sign(
          { username: userExist.password, role: userExist.role },
          APP_KEY
        );
        return response(res, 200, "Login Successfully", { token });
      } else return response(res, 400, "Credential is wrong");
    } else return response(res, 400, "Credential is wrong");
  } catch (error) {
    console.log(error);
    return response(res, 400, error.message, undefined, undefined);
  }
};

export const register = async (req, res) => {
  const { username, email, name, password } = req.body;
  const salt = await bcrypt.genSalt();
  const encryptedPassword = await bcrypt.hash(password, salt);
  try {
    const registUser = await registeringUser({
      username,
      email,
      name,
      password: encryptedPassword,
    });
    if (registUser.affectedRows) {
      return response(res, 200, "Register Successfully");
    }
  } catch (error) {
    return response(res, 500, "Register Failed");
  }
};
