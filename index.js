const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("<h1>Home Page</h1>")
    }
    else if (req.url === "/about") {
        res.end("<h2>About page</h2>")
    }
    else if (req.url === "/contact") {
        res.end("<h2>Contact page</h2>")
    }
    else {
        res.end("Invalid Path")
    }

});

server.listen(5000, () => {
  console.log("Server is Running...");
});
