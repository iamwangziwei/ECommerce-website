import jwd from "jsonwebtoken";

export const generateToken = (user) => {
  return jwd.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expireIn: "30d",
    }
  );
};
