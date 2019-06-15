const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

const express = require('express');
const app = express();


app.get('/app_02', (req, res) => {
  res.send('Hola Mundo app_02');
});
 
app.listen(port);