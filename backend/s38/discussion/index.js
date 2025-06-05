let http = require("http");/* This imports the built-in http module, which provides utilities to create HTTP servers and make HTTP requests. */

const port = 4000;
let items = ["Laptop", "Desktop", "Tablet", "Mouse"];

const app = http.createServer(function (request, response){
    // console.log("Received Request on 'app' variable");
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.end("Hello World");

    if (request.url == "/") {
        console.log("Received Request on 'app' variable");
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("Hello World");
    } else if (request.url == "/greeting") {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("Hello Again");
    
    } else if (request.url == "/homepage") {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("This is the homepage");
    
    } else if (request.url == "/items" && request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(`${items}`);
    
    } else if (request.url == "/items" && request.method === 'POST') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("This route will be used to add another item");
    
    }   else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end("404 Not Found");
    }
})

/* uses the 'app' and 'port' variables */
app.listen(port);
console.log(`Server running at localhost: 4000`);

/* createServer(): This method creates an HTTP server. It takes a callback function with two parameters: request (for incoming requests) and response (to send responses).

function (request, response) {}: This empty function is where you can handle the request and define what response to send back. Currently, it's empty and does nothing.

response.writeHead(200): Sends an HTTP response with an HTTP status code of 200, which means the request was successful or OK.

"Content-Type": "text/plain"}: This sets the Content-Type header of the response to text/plain, indicating that the server will send plain text data.

.listen(4000): This makes the server listen for incoming requests on port 4000. When the server is running, it waits for requests at http://localhost:4000.*/



/* ctrl + c to stop server running */