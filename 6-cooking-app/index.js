const express = require("express");
const app = express();

//importing data from fake Database
let recepies = require("./recepiesData.js");

//static assets
app.use(express.static("public"));

//templating engine
app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
  console.log(recepies[1]);
  res.render("home");
});

//training page route
app.get("/training", (req, res) => {
  res.render("training");
});

//recepies page route
app.get("/recepies", (req, res) => {
  res.render("recepies/recepies", { recepies });
});

//render create new recepie form
app.get("/recepie/new", (req, res) => {
  res.render("recepies/new");
});

//create new recepie in database
app.get("/add-recepie", (req, res) => {
  const title = req.query.title;
  const text = req.query.text;
  const img = req.query.img;
  const id = req.query.id;

  recepies.push({ title, text, img, id });
  // console.log("Scuuessfully created");

  res.redirect("/recepies");
});

//create new recepie via POST request
app.post("/add-recepie", (req, res) => {
  res.send("Post Roue Hit!");
});

//making the SERVER
app.listen(8080, () => {
  console.log("SERVER LISTENING AT PORT 8080");
});
