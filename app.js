const http = require('http');
const fs = require('fs');
const qs = require('querystring');


http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data)
        if (err) throw err;

        if (req.method === 'POST') {
            var rawData = '';
            req.on('data', data=>rawData+=data).on('end',()=>{
                qs.parse(rawData);
                fs.writeFile('message.txt', rawData, err=> {
                    if (err) throw err;
                })
            }); 
        }
        // let a = req.data.message;
        // fs.writeFile('message.txt', a, err => {
        //     if (err) throw err;
        // });
    })
    
}).listen(8080);