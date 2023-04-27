const express=require("express");
const app=express();
const hbs=require("hbs");
const path=require("path");

const port=process.env.PORT||3000;

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../template/views");
const partials_path=path.join(__dirname,"../template/paritals");

hbs.registerPartials(partials_path);

app.use(express.static(static_path));
app.set("views engine","hbs");
app.set("views",template_path);

//Routing
app.get("/",(req,res)=>{
    res.render("index.hbs");
})
app.get("/about",(req,res)=>{
    res.render("about.hbs");
})
app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
})
app.get("*",(req,res)=>{
    res.render("404error.hbs",{
        error_message:"Opps Page not found.Click here to go back";
    })
})

app.listen(port,()=>{
    console.log(`Listening to port number ${port}`);
})