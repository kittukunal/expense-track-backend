import jwt from "jsonwebtoken";

const generateCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });

  res.cookie("session", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",  // or "Strict" for tighter security
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  

  return token;
};

export default generateCookie;
