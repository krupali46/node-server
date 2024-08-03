const http = require('http');
const fs = require('fs');
const PORT = 3001;

const server = http.createServer((req, res) => {

    let log = `${Math.floor(Math.random() * 100)}: ${req.url}\n`

    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (!err) {
            res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data);
            fs.appendFile('log.txt', log, (err) => {
                if (!err) {
                    console.log('log is ok:');
                }
            });
        }
    }
    )

    console.log(req.url);
    console.log("server is running");

    // if (req.url == '/') {
    //     console.log('default : new file');
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     res.end('<h2>Hello Node</h2>\n');

    // } else if (req.url == '/about') {

    //     console.log('about : new file');
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/html');
    //     res.end('<p> i am about </p>\n');

    // } else {

    //     console.log('page is not found');
    //     res.statusCode = 404;
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.end('page is not found\n');
    // }

});

server.listen(PORT, (err) => {
    if (!err) {
        console.log(`server is running at http://localhost:${PORT}`);
    }
});
