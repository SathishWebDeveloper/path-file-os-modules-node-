const path = require ('node:path')

// console.log('directory',__dirname);

// console.log('filename',__filename);

// var file  = path.basename(__dirname)  //Returns the last part of a path

// console.log('file', file);


const files = "google";
var directories = path.extname(`/a/b/${files}.js`);// return the directory of the given path

console.log('directories', directories); 


// var ext = path.extname('a.js.txt'); ////Return the extension:

// console.log('ext', ext);

// const relativePath = path.join('folder', 'subfolder', 'file.txt');
// console.log('relativePath',relativePath); // Outputs path with appropriate separators

// const absolutePath = path.join(__dirname, 'assets', 'images', 'logo.png');
// console.log('absolutePath',absolutePath); // Outputs the full path based on the directory name


// path.join('foo', '/bar'); // Result depends on OS, e.g., 'foo/bar'
// path.resolve('foo', '/bar'); // Results in an absolute path, e.g., '/bar'

// console.log('test', path.resolve('/foo', 'bar.js' ));

// console.log('absolute', path.resolve('test', 'prince.js'));


// // Initial path
// const originalPath = '/foo/bar/qux/test'; // '/foo/bar/qux/test'

// Construct new path with additional folder
// const modifiedPath = path.join('/foo', 'bar', 'newFolder', 'qux', 'test');

// console.log('modifiedPath',modifiedPath); // Outputs: '/foo/bar/newFolder/qux/test' (cross-platform safe)

// const data = path.join('/folder1','/folder2', '..', 'folder3', 'file.txt');

// console.log('data', data);
// Output: '/folder1/folder3/file.txt'
