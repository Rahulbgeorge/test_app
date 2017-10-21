var express=require('express');
var ejs=require('ejs');
var ex=express();

//This command sets the view engine to ejs which is doenoladed using npm , it is similar to the one that
//is used in django views
ex.set('view engine','ejs');
ex.set('port', (process.env.PORT||5000));


ex.get("/home/:id/name/:name",function(req,res){
//this is a sample fo how data can be passed via the url
    res.send("<h1>hey bro!!! My name is "+req.params['name']+" and my id is "+req.params['id']);
});

//rendering a file using ejs
//note for rendering file, the file should have the extension .ejs and should be located in views directory
ex.get("/register/:name",function(req,res){
    res.render("homy",{"name":req.params.name});
});

ex.get("/homy",function(req,res){
    res.sendFile(__dirname+"//foobar//index.html");
});

ex.get("/assets/:file_system",function(req,res){

    res.sendFile(__dirname+"//assets//"+req.params.file_system);
});

ex.listen(ex.get('port'));