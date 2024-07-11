const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Mock Data (Later this data comes from our database)
const articles = [
  { title: "First Article", content: "Content of the first article." },
  { title: "Second Article", content: "Content of the second article." },
  { title: "Third Article", content: "Content of the third article." },
];

app.get("/", async function (request, response) {
  response.render("index", { articles: articles });
});

app.listen(8080, function () {
  console.log("Server is listening at port 5000");
});
