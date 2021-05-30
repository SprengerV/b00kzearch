const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
require('dotenv').config()

const PORT = process.env.PORT || 3001;
const app = express();

// environment setup
(process.env.NODE_ENV === 'development.local') && require('dotenv').config({ path: '.env.development.local'}),



app.use([
  express.urlencoded({ extended: true }),
  express.json(),
  routes
]);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log('🚀  Server server now on port', PORT, '👻 React App on Port 3000');
});