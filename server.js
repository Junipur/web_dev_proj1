import http from "http";
import * as path from "path";
import fs from "fs";

import url from "url";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { "Content-Type": "text/html" });
  //res.setHeader("Content-Type", "text/html");
  fs.readFile("index.html", function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
  //res.end("Hello World\n");
});

const PORT = 3000;
server.listen(PORT, (error) => {
  if (error) {
    console.log("error something went wrong in listen function", error);
  } else {
    console.log(`Server running at http://localhost:${PORT}/`);
  }
});

/*server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});*/
