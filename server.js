var express = require('express');
var app = express();
const port=process.env.PORT||8080;

app.use(express.static('public'))

app.get('/home', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
