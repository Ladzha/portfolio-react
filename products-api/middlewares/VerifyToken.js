import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { login } from "../models/users.js";
dotenv.config();

export const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.token || req.headers["x-access-token"];

  console.log("my token =>", accessToken);

  if (!accessToken) return res.status(401).json({ msg: "unauthorized" });

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ msg: "verify token failed" });
    const email = decoded.email;
    // console.log('decoded=>', decoded);
    const checkemail = async () => {
      try {
        const row = await login(email);
        if (row.length > 0) return next();
        return res.status(401).json({ msg: "unauthorized" });
      } catch (error) {
        return res.status(401).json({ msg: "unauthorized" });
      }
    };
    checkemail();
    // login(email)
    //   .then((row) => {
    //     if (row.length > 0) return next();
    //     return res.status(401).json({ msg: "unauthorized" });
    //   })
    //   .catch((e) => {
    //     return res.status(401).json({ msg: "unauthorized" });
    //   });
  });
};
