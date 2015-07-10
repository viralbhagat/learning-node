var http = require('http');
http.createServer(function(request, response){
    response.write("<html>");
    response.write("<head><title>Node.js JS</title></head>");
    response.write("<body>Hello Web</body>");
    response.write("</html>");
    response.end();
}).listen(9999);