const express = require('express');
const app = express();


app.get('/myapp', (req, res) => {
  res.send('Hola Mundo app_02 xsd');
});

app.get('/', (req, res) => {
  res.send('Hola Mundo app_02');
});
app.listen(49152);


RewriteEngine On
RewriteRule ^$ http://127.0.0.1:49153/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:49153/$1 [P,L]

RewriteCond %{HTTP_HOST} ^cloud\-app\.pro$ [OR]
RewriteCond %{HTTP_HOST} ^www\.cloud\-app\.pro$
RewriteRule ^/?$ "http\:\/\/cloud\-app\.pro\" [R=301,L]


RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ app/$1.js [NC,L] 
RewriteEngine On
RewriteRule ^$ http://127.0.0.1:49555/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:49555/$1 [P,L]
DirectoryIndex app/app.js


var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works copia!\n',
        version = 'NodeJS 8088 ' + process.versions.node +  '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();