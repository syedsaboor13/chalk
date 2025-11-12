import chalk from 'chalk'
import readline from "readline-sync"

let name = readline.question(chalk.green("What is your Name?  "))
let age = readline.questionInt(chalk.yellow("what is your age"))