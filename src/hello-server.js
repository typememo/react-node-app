const http = require('http')
const server = http.createServer(handler)
server.listen(8081)

function handler (request, response) {
    console.log('url:', request.url)
    console.log('method:', request.method)
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>Hello, world</h1>\n')
}