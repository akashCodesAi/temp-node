const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("Here is our short history");
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(`
            <h1>OOPS!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `);
  }
});

server.listen(5000);

console.log("Server running");
