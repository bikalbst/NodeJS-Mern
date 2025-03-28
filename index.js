const fs  = require('fs');
const express = require('express');

const index = fs.readFileSync('index.html', 'utf8');
const data  = fs.readFileSync('data.json', 'utf8');
const products  = data.products;

const server = express();

server.use((req, res, next) => {
    console.log(req.method, req.url, req.ip, new Date(), req.get('User-Agent'));
    next();
});
    
const auth = (req, res,next) => {
    if(req.query.password === '123') {
        next();
    }else {
    res.status(401).send('Not authorized');        }
}

server.use(auth);



server.get('/', (req, res) => {
    res.status(201).send('<h1>Hello World</h1>');
})


server.listen(8080 , ()=> {
    console.log("Server started");
});
