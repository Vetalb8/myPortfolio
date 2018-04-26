import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import keys from '../config/keys';
import mongoose from './db/mongoose';


const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: keys.COOKIE_KEY,
  }),
);

require('./routes/projectRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'));

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const PORT = keys.PORT;

app.listen(PORT);
