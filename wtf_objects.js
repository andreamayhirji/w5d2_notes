//USING OBJECTS

//Express 'response'

// In Express, we write endpoint handlers that take two arguments, 
// a request and a response.
// the response argument isn't actually an HTTP response.
// It gives us ways to manipulate the HTTP response:
app.get('/', (request,response) => {
    response.status() // to set the status of the response
    response.set() // to set outgoing headers of the response
    response.json() // to send an object as JSON in the response-body
    response.get() // to see what headers we've already set
    response.locals;
    response.headersSent; // not a method, but a simple property
});

// So the Response has internal state, which we can modify or query 
// with some methods and properties. 
// Also, some of the manipulations we do on it will have external 
// effects on the world (like sending an actual HTTP response to the client).






