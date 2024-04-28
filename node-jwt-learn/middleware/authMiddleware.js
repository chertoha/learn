const jwt = require("jsonwebtoken");
const { secret } = require("../config");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "User is not authorized" });
    }
    const decodedData = jwt.verify(token, secret);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: "User is not authorized" });
  }
};

// /eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGNkNWY4M2U5NWVhN2VlODllZTI0YiIsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNjc1NDE3MTE4LCJleHAiOjE2NzU1MDM1MTh9.hz354eGt-8vGbKcUOKV-0x6qhiqNkhfSTvUoY4h0TeI
