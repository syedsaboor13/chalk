
/*

What is dotenv in Node.js

dotenv is a Node.js package that loads enivronments variables from a .env file into process.env

This is useful because:

> You dont want secrets (API's key's DB passwords) inside your code.
> You want different configs for dev, staging, production.
> You want clean, maintainable configuration.

Command : npm instail dotenv

*/

import dotenv from "dotenv"
dotenv.config(); // loading content from .env 

let name1 = process.env.NAME;
let clgName = process.env.COLLEGENAME
let email = process.env.EMAIL 
let password = process.env.PASSWORD 
let phone = process.env.PHONE

console.log(name1 , clgName, email, password, phone);
 
