const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

const express = require('express');
const app = express();


app.get('/nodeapp_05', (req, res) => {
  res.send('Hola Mundo Nodeapp_05');
});
 
app.listen(port);