import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    // console.log("AUTH MIDDLEWARE REACHED");
    const token = req.headers.authorization?.split(" ")[1]; // Use optional chaining to avoid errors if authorization header is not present

    if (token) {
      const decodedData = jwt.verify(token, "secret");
      req.email = decodedData?.email;
      // Proceed to the controller if token is present and valid
      next();
    } else {
      // If token is not present or invalid, send a 401 Unauthorized response
      return res.status(401).send("Not authorized!");
    }
  } catch (error) {
    console.log(error);
    // If there's an error with token verification, send a 500 Internal Server Error response
    return res.status(500).send("Internal server error");
  }
};

export default auth;
 