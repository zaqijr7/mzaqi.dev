import { login, register } from "@controllers/authentication";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      login(req, res);
      break;
    case "PUT":
      register(req, res);
      break;
    default:
      console.log(`Sorry, we are out of`);
      break;
  }
}
