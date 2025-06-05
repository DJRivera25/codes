const express = require("express"); // Import the Express framework
const app = express(); // Create an instance of the Express application. app is our server

app.use(express.json()); //allows your app to read json data
app.use(express.urlencoded({extended: true})); // allows your app to read data from forms. "extended true" allows us to receive information in other data types such as an object which we will use throughout our application

let books = [
    { id: 1, title: "1984", author: "George Orwell" }
  ];

  app.get("/", (req, res) => {

        res.send("Welcome to the Bookstore");
  });

  app.get("/books", (req, res) => {

        res.json(books);

  })

  app.get("/books/:id", (req, res) => {

    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if(!book){
        return res.status(404).json({message: `Book not found`});
    } 
    
    res.json(book);

})

app.post("/addbook", (req, res) => {
    books.push({ "id": (books[books.length-1].id)+1, "title": "The Alchemist", "author": "Paulo Coelho" });
    res.send(`The book ${books[books.length-1].title} is successfully added`);
})


// Start the Express server on port 4000
app.listen(3000, () => console.log("Server running at port 3000"));
 
