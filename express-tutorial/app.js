const http = require('http');
const { readFileSync } = require('fs');

//get all files from index.html
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        //end method signals to the server that all of the response headers and body have been sent
        //and the server should consider this message complete
        res.end();

        //styles
    }
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyles);
        res.end();

    }
    //logo
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' }) ;
        res.write(homeImage);
        res.end();
    }
    //logic
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homeLogic);
        res.end();
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>page not found</h1>');
        console.log(res.statusCode);
        res.end();
    }
});

server.listen(5000);