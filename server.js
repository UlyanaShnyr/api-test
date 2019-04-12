const express = require('express');
const app = express();
const port=process.env.PORT||8080;

const database={
    count:0,
}
app.use(express.static('public'))

app.get('/increase', function (req, res) {
  database.count++;
    res.send(`Count is now ${database.count}`);
});

app.get('/decrease', function (req, res) {
    database.count--;
      res.send(`Count is now ${database.count}`);
  });
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
