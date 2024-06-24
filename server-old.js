const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    // readFile function work is read files on your computer.
    fs.readFile("index.html", "utf8", (err, data) => {
      res.write(data);
      res.end();
    });

    // WriteFile is work like Replace the content
    fs.writeFile("read-more.txt", "hello 123", "utf8", (res) => {
      console.log(res);
    });

    // appendFile is work like appends content at the end of the file
    fs.appendFile("read-more.txt", "append text\n", "utf8", (res) => {
      console.log(res, "append");
    });
  })
  .listen(8000);
