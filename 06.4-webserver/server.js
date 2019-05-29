
const http = require('http');
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

http.createServer( (req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Juan',
        edad: 34,
        url: req.url
    }

    res.write( JSON.stringify( salida ));
    //res.write(`<b>Ambiente</b>: ${env} <br> <h1>Hola Nodeapp_03</h1> <br> <b>Port</b>: ${port}`);
    res.end();


})
.listen(port);

console.log(`Escuchando el puerto  ${port}`);