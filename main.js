const http = require('http');
const fs = require('fs');
const gerarNumero = require ('./num.js');
const nome = require ('/.nome');


const requestListener = function (req, res) {
    if (req.url === "/") { 
    res.writeHead(200);
    res.end("Bem-vindo!!!!!");
    } else if (req.url === "/sobre") { 
    res.writeHead(200);
    res.end("Aqui estao algumas infos sobre mim!!! meu nome é nathaly, eu tenho 18 anos /n HAHAHAHAHAAHAH");
    } 
    else if (req.url === "/contato"){
     res.writeHead(200);
     res.end("nhoffmaiadeoliveira = instagram"); 
    }

    //nn da certo n sei pq
    else if (req.url === "/numero"){
        res.writeHead(200);
        res.end(gerarNumero().toString());
        }


        // nn da certo :(((((((
        else if (req.url === "/saudacao"){
            res.writeHead(200);
            res.end(nome().toString());
            }



    else { 
    res.writeHead(404);
    res.end("Página não encontrada");
    }
    };


    const server = http.createServer(requestListener);
    server.listen(8001, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8001");
    });