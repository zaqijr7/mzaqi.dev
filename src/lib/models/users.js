import db from "@utils/db";

export const searcUserbyUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `SELECT * FROM users WHERE username=?`,
      [username],
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};

export const registeringUser = (value) => {
  return new Promise((resolve, reject) => {
    db.execute(
      `INSERT INTO users (${Object.keys(value).map((item) => item)})
    VALUES (${Object.keys(value).map(() => "?")} )`,
      Object.values(value),
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};
