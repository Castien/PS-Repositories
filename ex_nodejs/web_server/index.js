const http = require('http');


const PORT = 3000;
const hostName = "127.0.0.1"

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write('<h1>Hello Node</h1>');
        res.end();
    } else if (req.url === '/products') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write('<h1>Products Page</h1>');
        res.end();
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write('<h1>Oops Page not found!</h1>');
        res.end();
        // throw Error();
    }


}).listen(PORT, hostName, () => console.log(`Server is running at ${hostName} on port:${PORT}`));