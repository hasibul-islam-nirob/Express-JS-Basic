var expressJS = require('express');

app = expressJS();

app.get("/", function (request,response){
    response.send("This is Home Page");
})

app.post("/about", function (request,response){
    response.send("This is About Page");
})

app.put("/contact", function (request,response){
    response.send("This is Contact Page");
})

app.delete("/phone", function (request,response){
    response.send("This is Phone Page");
})

app.listen(3000,function (){
    console.log("Server Run Success");
})