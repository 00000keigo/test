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
      for (i = 1; i < 101; i++) { console.log("%d: %s%s", i, !(i % 3) ? 'Fizz' : '', !(i % 5) ? 'Buzz' : ''); }
}});
server.listen(8080, process.env.PORT);
