const express = require("express");
const app = express();

app.set("view engine", "ejs");

// console.log(app);

//Routes
app.get("/", (req, res) => {
  // res.send("Home Page");
  res.render("home");
});

app.get("/products", (req, res) => {
  // console.log(req);
  // res.send("This will be our Products page.");
  const products = ["Jeans", "Shoes", "Polo", "Belts"];
  res.render("products", { products });
});

app.get("/contact", (req, res) => {
  // res.send("Contact Us Page");
  res.render("contact");
});

app.get("/blogs", (req, res) => {
  // res.send("All Blogs");
  res.render("blogs");
});

app.get("/random", (req, res) => {
  let num = Math.floor(Math.random() * 10) + 1;
  let name = "Ali";
  res.render("random", { num, name });
});

//Starting Server
app.listen(8080, () => {
  console.log("Server Listening at Port 8080");
});
