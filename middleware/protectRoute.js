const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    console.log("token ::::::: ", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded ::::::: ", decoded);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorizzzzzzzzzed - Invalid Token" });
    }

    console.log("decoded: ", decoded);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;

    console.log("req.user: ", req.user);

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = protectRoute;
