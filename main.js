var http = require('http');
var fs = require('fs');
http.createServer( function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, content) {
    response.end(content);
  });


//Reads in a file and logs the contents to the console
var callback = function(err, contents) {
console.log(contents);
};
fs.readFile('my_file.txt', callback);

// Copies files
var file = fs.createReadStream('my_file.txt');
var newFile = fs.createWriteStream('my_file_copy.txt');
file.pipe(newFile);

//Allows file upload through command line
var uploadedFile = fs.createWriteStream("my_file_copy.txt");
request.pipe(uploadedFile);
request.on('end', function() {
response.end("File has been uploaded");
});

}).listen(8080);
