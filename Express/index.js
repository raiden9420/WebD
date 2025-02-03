const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/About', (req, res) => {
  res.send('About Us Page');
});

app.get('/Contact', (req, res) => {
  res.send('Contact Us Page');
});

app.get('/blog/:slug', (req, res) => {
  console.log(req.params)
  console.log(req.query)

  res.send(`Hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
