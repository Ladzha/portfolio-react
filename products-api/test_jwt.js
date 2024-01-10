// const jwt = require('jsonwebtoken');
import jwt, { decode } from "jsonwebtoken";

const token = jwt.sign(
  { email: "aaa@gmail.com", id: 101, name: "aaa" },
  "#345%67^^54",
  {
    expiresIn:"60s"
  }
);


// console.log(token);

const old_token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBnbWFpbC5jb20iLCJpZCI6MTAxLCJuYW1lIjoiYWFhIiwiaWF0IjoxNjkwNzE3ODEzLCJleHAiOjE2OTA3MTc4NzN9.HLNQTBwZbN0onGkXX4JkCO8bmQ1hkPxQ9pC3z8cySY8`;


jwt.verify(token,'#345%67^^5',(err,decoded) => {
  if(err) return console.log(err);

  console.log(decoded);
})