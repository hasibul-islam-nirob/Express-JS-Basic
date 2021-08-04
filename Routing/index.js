var expressJS = require('express');

app = expressJS();

app.get("/jsonData", function (request,response){
    let jsonData = [
        {
            name:"Nirob",
            city:"Dhaka",
        },
        {
            name:"Hasib",
            city:"Dhaka",
        },
    ]

    response.json(jsonData);
})

app.listen(3000,function (){
    console.log("Server Run Success");
})