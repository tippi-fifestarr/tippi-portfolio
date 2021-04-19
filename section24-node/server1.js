const http = require('http');

const server = http.createServer((request, response) => {
    console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)
    // response.setHeader('Content-Type', 'text/html');
const user = {
    name: 'Higbn',
    hobboy: "sjekr"
}

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user))
})

// listen for the port number to be requested
server.listen(3000)