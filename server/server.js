const express = require('express');
const cors = require('cors');
// const morgan = require('morgan');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join( __dirname, '../client')))

app.get('/', (req, res) => {
  res.status(200);
  res.end();
})

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`)
})
