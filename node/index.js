const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
   const endpoint = req.url;
   if( endpoint==='/start' ){
      fs.readFile('./index.html',(err, data)=>{
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }
   if( endpoint==='/api' ){
      // ここに処理を記述してください。
      if (endpoint === '/api') {
         // ここに処理を記述してください。
         for (var i = 1; i < 101; i++) {
            var s = "";
            if (!(1 % 3)) { s += "Fizz"; }
            if (!(1 % 5)) { s += "Buzz"; }
            console.log("%d : %s", i, s);
         }
      }
   }
});
server.listen(8080);
