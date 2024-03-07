const express = require("express");
const app = express();
const port = 8080;
const path =  require("path");
const ejsMate = require("ejs-mate");


app.set("view engine" , "ejs");
app.set("Views" , path.join(__dirname , "Views"));
app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname , "/Public")));




app.get("/home" , (req , res) => {
    res.render("home.ejs");
});


app.get("/about" , (req , res) => {
    res.render("about.ejs");
});


app.get("/products" , (req , res) => {
    res.render("products.ejs");
});


app.get("/contacts" , (req , res) => {
    res.render("contacts.ejs");
});



app.listen(port , () => {
    console.log(`App is Listening on Port ${port}`);
});
