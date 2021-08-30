const express = require("express");
const app = express();
const importData0 = require("./kelurahan.json");
const importData1 = require("./lahan_pertanian.json");


app.get("/",(req, res)=>{
    res.send("apiandroidpalaran /kelurahan");    
});

app.get("/kelurahan",function(reg,res){
    res.send(importData0)
});

app.get("/lahan",function(reg,res){
    res.send(importData1)
});

app.listen(process.env.PORT || 8080);