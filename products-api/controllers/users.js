import { register, login, users } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config(); 

export const _users = async (req, res) => {
  try{
    const rows = await users();
    res.json(rows)
  }
  catch(err){
    console.log(err);
    res.status(404).json({ msg: "something went wrong!!" });
  }
}

export const _login = async (req, res) => {
  try {
    const row = await login(req.body.email.toLowerCase());

    if (row.length === 0)
      return res.status(404).json({ msg: "email not found" });

    const match = await bcrypt.compare(req.body.password + "", row[0].password);
    if (!match) return res.status(400).json({ msg: "wrong password" });

    // successful login
    const userid = row[0].id;
    const email = row[0].email;

    const secret = process.env.ACCESS_TOKEN_SECRET;
    // console.log('secret=>',secret);

    const accessToken = jwt.sign({ userid, email }, secret, {
      expiresIn: "60s",
    });

    res.cookie("token", accessToken, {
      httpOnly: true,
      maxAge: 60 * 1000,
    });

    res.json({ token: accessToken });
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "something went wrong!!" });
  }
};

export const _register = async (req, res) => {
  const { email, password } = req.body;

  const lower_email = email.toLowerCase();

  //   const salt = bcrypt.genSaltSync(10);
  const salt = await bcrypt.genSalt(10);
  //   const hash = bcrypt.hashSync(password + "", salt);
  const hash = await bcrypt.hash(password + "", salt);

  //   register(lower_email, hash)
  //     .then((row) => {
  //       res.json(row);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       res.status(404).json({ msg: "user allready exist!" });
  //     });
  try {
    const row = await register(lower_email, hash);
    res.json(row);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "user allready exist!" });
  }
};

export const _logout = (req, res) => {
  // const accessToken = req.cookies.token;
  // if (!accessToken) return res.sendStatus(204);
  req.headers['x-access-token'] = null;
  res.clearCookie("token");
  return res.sendStatus(200);
};
