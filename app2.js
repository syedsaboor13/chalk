import readline from "readline-sync"
import fs from "fs/promises"

async function common() {
    try{
        // await fs.mkdir("CFIStudents")
        // await fs.rmdir("CFIStudents")
        // console.log("Created and Deleted folder");

        let folder = readline.question("Enter the folder name : ")
        await fs.mkdir(folder
        )


    }catch (error) {
    console.log(error);
    console.log(error.name, error.message);
    }
}

common()