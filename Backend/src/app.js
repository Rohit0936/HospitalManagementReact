const bodyParser = require("body-parser");
let express=require("express");
let app=express();
let db=require("./config/db.js")
let cors=require("cors");
let routes=require("./routes/regroutes.js");
require("dotenv").config();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use("/",routes);

module.exports=app;