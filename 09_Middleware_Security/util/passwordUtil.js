import bcrypt from "bcrypt";

const saltRounds = 14;
const plaintextPassword = "hunter12";
const hashedPassword = "$2b$14$hOeijXFqrHvfUQFU9BRnT.scDZdUdV03A0/paROq/G138zJT5.KaG";


// sign up
const hash = await bcrypt.hash(plaintextPassword, saltRounds);

console.log(hash);

// sign in / log in
const comparison = await bcrypt.compare(plaintextPassword, hashedPassword);

console.log(comparison);