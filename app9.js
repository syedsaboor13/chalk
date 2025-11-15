import os from 'os';
import chalk from 'chalk';


console.log(chalk.blue("------------------------------------------"));
console.log(chalk.cyan("🖥  SYSTEM INFO CLI TOOL"));
console.log(chalk.blue("------------------------------------------\n"));

console.log(chalk.yellow("Platform:"), chalk.white(os.platform()));
console.log(chalk.red("OS Type:"), chalk.white(os.type()));
console.log(chalk.red("Release:"), chalk.white(os.release()));
console.log(chalk.red("Architecture:"), chalk.white(os.arch()));
console.log(chalk.red("Hostname:"), chalk.white(os.hostname()));

console.log("\n" + chalk.magenta("CPU Info"));
console.log(chalk.white("Cores:"), os.cpus().length);
console.log(chalk.white("Model:"), os.cpus()[0].model);

console.log("\n" + chalk.blue("Memory Info"));
console.log(chalk.white("Total Memory:"),(os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB");
console.log(chalk.white("Free Memory:"),(os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB");

console.log("\n" + chalk.green("Network Interfaces"));

console.log("\n" + chalk.red("Uptime"));
console.log(
  chalk.white("Uptime (Seconds):"),
  os.uptime()
);

console.log("\n" + chalk.yellow.bold("Home Directory:"), chalk.white(os.homedir()));
console.log(chalk.yellow.bold("Temp Directory:"), chalk.white(os.tmpdir()));

console.log("\n" + chalk.green.bold("System Info Retrieved Successfully!\n"));