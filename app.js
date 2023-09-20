const express = require('express');
const app = express();
const port = 3000; // Choose the port you want to run your app on

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});