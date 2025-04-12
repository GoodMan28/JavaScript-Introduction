import express from 'express'
const app = new express(); // creating an instance of the express

app.get("/", function (req, res) {
  res.send("Hi there");
  console.log("Sucessfully sent");
});

app.listen(3000); // which port do we want to listen the request on