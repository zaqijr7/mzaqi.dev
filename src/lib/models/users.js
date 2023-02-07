import db from "@utils/db";

export const searchUser = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users`, (err, res, field) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};
