const express = require('express'); 
const fs = require('fs');
const path = require('path');
const app = express();

const directory = __dirname ; 
const file = __filename;

const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    
    // Close the interface after receiving input
    rl.close();
});



// to implement the file path or find a file path using path.join to reach that destination 
const sourceFolder = path.join(directory, './original');
const destinationFolder = path.join(directory, './destination');

// Step 1: Check if the destination folder or file exists, if not, create a folder on it synchronous
if (!fs.existsSync(sourceFolder)) {
    fs.mkdirSync(sourceFolder);
}

// Step 1: Check if the destination folder or file exists, if not, create a file on it synchronous
// if (!fs.existsSync(destinationFolder)) {
//     // File does not exist, create a sample text file
//     fs.writeFileSync(destinationFolder, 'This is a sample text file.');
//     console.log(`${destinationFolder} has been created in ${destinationFolder}`);
// } else {
//     console.log(`${destinationFolder} already exists in ${destinationFolder}`);
// }


fs.readdir(sourceFolder, (err, files) => {
    if (err) {
        console.error('Error reading source folder:', err);
        return;
    }
    console.log("files", files); // files will return an array 

        //  Filter the files to get only the .txt files
        // const textFiles = files.filter(file => path.extname(file) === '.txt');


        files.forEach((file)=> {
            const sourceFile = path.join(sourceFolder , file)
            const destinationFile = path.join(destinationFolder , file)
            fs.copyFile(sourceFile, destinationFile, (err) => {
                if (err) {
                    console.error(`Error copying file ${file}:`, err);
                } else {
                    console.log(`${file} copied successfully to ${destinationFolder}`);
                }
            });
        })

 
});

const port = 4000;

app.get('/', (req,res)=> {
    res.send("Hello World");
})

app.listen(port ,()=>{
    console.log("port is running on 4000 successfcully");
})


/// copy file 

// import {readFile, writeFile,appendFile,copyFile} from 'fs'
// const arr = ['one','two','three','four'];
// for(let i=0;i<arr.length;i++){
//     copyFile(`./origin/${arr[i]}.txt`, `./destination/${arr[i]}.txt`, function(data) {
//         if(data) {
//             return console.log(data);
//         }
//         console.log("The file was saved!");
//     });
// }