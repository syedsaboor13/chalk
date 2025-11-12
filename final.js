

import readline from "readline-sync"
import fs from "fs/promises"

async function common() {
    try{
        let folderName = "test";
        let fileName = "hi.txt";
        let reNameFile = "bye.txt"
        let fileContent = "Hello CFI CS Students"
        let filePath = "/home/saboor/chalk"

    // 1.Create a folder
    // await fs.mkdir(folderName);
    // console.log("folder created");

    // 2. delete a folder
    // await fs.rmdir(folderName);
    // console.log("folder deleted");

    // 3. File Create
    // await fs.writeFile(fileName, fileContent);
    // console.log("file created and content added");

    // 4. Read file
    // let output = await fs.readFile(fileName, "utf-8");
    // console.log(output);

    // 5. Rename File
    // await fs.rename(fileName, reNameFile);
    // console.log("file renamed")

    //6. delete file
    // await fs.unlink(reNameFile);
    // console.log("file deleted");

    // 7. List files
    let list = await fs.readdir(filePath);
    console.log(list);

    // 8. update file
    // await fs.appendFile(fileName, "\nwHELLO HI BYE");
    // console.log("file updated");

    }catch (error) {
    // console.log(error);
    console.log(error.name, error.message);
    }
}

common()