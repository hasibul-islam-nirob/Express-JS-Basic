var expressJS = require('express');
//var bodyParser = require('body-parser');
var multer = require('multer');

var multerInc = multer();
var app = expressJS();

// parse application/json
//app.use(bodyParser.json());
//app.use(multerInc.array());
//app.use(expressJS.static('public'));

var myStorage = multer.diskStorage({
        destination:function (request, file, callBack){
            callBack(null,'./upload')
        },
        filename:function (request, file, callBack){
            callBack(null, file.originalname)
        }
    })

var upload = multer({storage:myStorage}).single('myfile');

app.post("/", function (request,response){

    upload(request, response, function (error) {
        if (error){
            response.send("File Upload Fail");
        }else {
            response.send("File Upload Success");
        }
    })

})


app.listen(3000,function (){
    console.log("Server Run Success");
})