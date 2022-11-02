console.log("hello word")

const http = require('http');



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end( "<h1>hello node</h1>")
});
 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const fs = require('fs'); 
fs.writeFile('welcome.txt', 'hello node', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
  
  let generator= require('generate-password');
    let password = generator.generate({
	length: 10,
	numbers: true
});

console.log(password);
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com',
    pass: 'pass'
  }
});

var mailOptions = {
  from: '@gmail.com',
  to: '@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

