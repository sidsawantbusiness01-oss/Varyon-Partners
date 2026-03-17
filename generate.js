const bcrypt = require("bcryptjs");

const password = "varyon_admin_password"; // Replace with your actual password

const hash = bcrypt.hashSync(password, 10);

console.log("Hashed Password:");
console.log(hash);