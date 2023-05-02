//Call the Express npm Package
const express = require("express");

//Express App
//Creating our server named app
const app = express();

//Make everything inside public available
app.use(express.static("public"));

app.get("/home", (request, response, next) => {
  //RESPONSE -  method to send info to the client
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response, next) => {
  //RESPONSE -  method to send info to the client
  response.sendFile(__dirname + "/views/about-page.html");
});

app.get("/works", (request, response, next) => {
  //RESPONSE -  method to send info to the client
  response.sendFile(__dirname + "/views/works-page.html");
});

//START the server
//3000 IS A PORT - a door to a server
app.listen(3000, () => console.log("App is listening on PORT 3000"));