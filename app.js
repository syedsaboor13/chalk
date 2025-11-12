

import readline from "readline-sync"
import chalk from "chalk"


console.clear();

console.log(chalk.red("==========================="));
console.log(chalk.red("   Instagram Login Page "));
console.log(chalk.red("==========================="));

console.log("\n");

let username =  readline.question(chalk.blue("Enter your username : "))
let password = readline.question(chalk.yellow("Enter your password : "),{hideEchoback: true})

console.log(chalk.grey("\nChecking credentails"));


// Simple chalk
if (username === "Bob" && password === "123456"){
    console.log(" Login Successful");
    console.log(` Welcome back ${username}`);
} else{
    console.log(" Login Failed!");
    console.log("Invalid username or passwword ");
}

console.log("\n Thank you for using Instagram CFI");


// console.log(username);
// console.log(object);
