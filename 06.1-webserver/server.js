
const http = require('http');

http.createServer( (req, res) => {

    const port = process.env.PORT;
    const env = process.env.NODE_ENV;

    res.write(`<b>Ambiente</b>: ${env} <br> <h1>Hola Nodeapp_03</h1> <br> <b>Port</b>: ${port}`);
    res.end();

})
.listen(3000);

console.log('Escuchando el puerto 3000');