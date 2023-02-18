const http=require('http');
const server=http.createServer(function(req,res){
    if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Hello I am Homepage</h1>');
    res.write("I am in the homepage.") 
    res.end();
}
else if(req.method==='GET' && req.url==='/about'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>I am in the aboutpage</h1>");
    res.write(JSON.stringify(["hello",90,25,35,23]));
    res.end();
}
else if(req.method==='GET' && req.url==='/contact'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>I am in the contactpage</h1>')
    res.write('Contact Page')
    res.end();
}
})
server.listen(8080);
