const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const https = require("https");
const axios = require("axios");
var $ = require('jquery')


app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));
//app.use(express.static(__dirname + "/index.js"))



app.get("/", function(req, res){

    const url = "https://v6.exchangerate-api.com/v6/71f59e5798d4132189b87f3c/latest/" + "USD"
    axios.get(url)
    .then(response => {

        const datas = response.data.conversion_rates
        //console.log(datas)
        res.render("home", {datas:datas})

    })
    .catch(error => {
    console.log(error);
    });

})
app.post("/", function(req, res){
    baseData = `${req.body.myData}`
    //console.log(baseData)
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.listen(port, function(){
    console.log("listening at 8000");
});
