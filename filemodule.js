// sychrnous 
// fs.readFileSync(path[, options])
const fs = require('fs');

// try {
//   const data = fs.readFileSync('filesystem.txt', 'utf8');
// //   for above folder we use ./ to go that folder and get the data  like ./original/text1.txt
//   console.log('File content:', data);
// } catch (err) {
//   console.error('Error reading file:', err);
// }


//callback 
// fs.readFile('filesystem.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content 33:', data);
// });

//promises
// const { readFile } = require('node:fs/promises');

// async function readFileExample() {
//   try {
//     const data = await readFile('filesystem.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFileExample();



// write file 

//asynchronous
// fs.writeFile('filesystem.txt', 'Hello, World!', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log('File written successfully', data);
// });


// //synchronous 
// try {
//   fs.writeFileSync('filesystem.txt', 'hello kanna');
//   console.log("data success") 
// }
// catch(err){
//   console.log("error catched ", err)
// }


// appending files 

//asynchrounous 

// fs.appendFile('filesystem.txt' , ' \n add this da sathish' , (err)=> {
//     if(err){
//         console.log('error catched' , err);
//         return;
//     }
//     console.log("data appended success");
    
// })

// synchrounous
// try {
//     fs.appendFileSync('filesystem.txt' , "this is the synchrounous");
//     console.log("text added successfully");
    
// }
// catch(err){
//     console.log('err: ', err);
    
// }

// deleting files - unlink 

//asynchronous 

// fs.unlink('async.txt' , (err)=> {
//     if(err) {
//         console.log('err: ', err);
//     }
//     console.log("data deleted successfully");
    
// })


// try {
//   fs.unlinkSync('test.txt');
//   console.log("data deleted successflly");
// }
// catch(err){
//     console.log('err: ', err);
// }

// creating a directory

// asynchronpous 

// fs.mkdir('myfolder/test' ,  { recursive: true }, (err)=> {
//     if(err){
//         console.log('err: ', err);
//         return;

//     }
//     console.log("file created successfully");
// })

// fs.mkdir('exampleDir/test', { recursive: true }, (err) => {
//     if (err) {
//       console.error('Error creating directory:', err);
//       return;
//     }
//     console.log('Directory created successfully');
//   });


// read a directory 

// asynchronous

fs.readdir('myfolder' , (err,data)=> {
    if(err){
        console.log('err: ', err);
        return;
    }
    console.log(" data read success" , data);
    
})

