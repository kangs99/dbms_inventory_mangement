import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  
  const checkUserQuery = "SELECT * FROM users WHERE username = ? or email= ?";

  db.query(checkUserQuery, [req.body.username,req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const insertUserQuery =
      "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      
    ];

    db.query(insertUserQuery, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};


export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    const { password, ...others } = data[0];

    res.cookie("accessToken", token, {
        httpOnly: true,
      }).status(200).json(others);
  });
};

// export const login = (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!username || !password) {
//     return res.status(400).json("Username and password are required.");
//   }

//   const q = "SELECT * FROM users WHERE username = ?";

//   db.query(q, [username], (err, data) => {
//     if (err) {
//       console.error("Database error:", err);
//       return res.status(500).json("Internal server error.");
//     }

//     if (data.length === 0) {
//       console.log("User not found:", username);
//       return res.status(404).json("User not found!");
//     }

//     const user = data[0];
//     const checkPassword = bcrypt.compareSync(password, user.password);

//     if (!checkPassword) {
//       console.log("Invalid password for user:", username);
//       return res.status(400).json("Wrong password or username!");
//     }

//     const token = jwt.sign({ id: user.id }, "jwtkey");
//     const { password: userPassword, ...userData } = user;

//     res.cookie("accessToken", token, {
//       httpOnly: true,
//     }).status(200).json(userData);
//   });
// };



export const logout = (req, res) => {
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out.")
};
