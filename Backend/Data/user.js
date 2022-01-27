import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "jenob",
    email: "jenob@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "molly",
    email: "molly@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
