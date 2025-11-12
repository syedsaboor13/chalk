import readline from "readline-sync"
import fs from "fs/promises"

async function common() {
    try{


        let fileName = readline.question("Enter the file name : ")
        let fileContent = "BOB is bob"

        await fs.writeFile(fileName, fileContent)
        await fs.unlink(fileName)
        await



    }catch (error) {
    // console.log(error);
    console.log(error.name, error.message);
    }
}

common()