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
    res.render("home");
});


app.get("/about" , (req , res) => {
    res.render("about");
});


app.get("/products" , (req , res) => {
    res.render("products");
});


app.get("/contacts" , (req , res) => {
    res.render("contacts");
});



app.listen(port , () => {
    console.log(`App is Listening on Port ${port}`);
});
