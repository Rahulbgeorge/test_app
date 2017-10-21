var http=require("http");
var fs=require("fs");



fs.writeFileSync(__dirname+"//mlm.txt","Hellow world!!!!!!!!!!!!");
var server=http.createServer(function(req,res){

    if(req.url=="/home")
        {console.log(__dirname);

            res.writeHead(200,{"Content-Type":"text/plain"});
            res.end(fs.readFileSync("text.txt"),"utf8");

        }
    else{console.log(__dirname);
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<html><body><align='center'><H1>Page Not Found</h1></align></body></html>")
    }
});

server.listen("8000","127.0.0.1");