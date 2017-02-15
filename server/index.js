import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app/components/app';
import apiRouter from './api.js';
import db from './db';

const app = express();

app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRouter);

const AppFactory = React.createFactory(App);

app.get('/', (req, res, next) => {
  db.query('SELECT * FROM submissionanalytics WHERE QUOTED_DATE = "" LIMIT 0,1000', (error, results) => {
    if (error) {
      next(error);
    } else {
      const componentInstance = AppFactory({ initialData: results });

      res.render('index', {
        reactInitialData: JSON.stringify(results),
        content: renderToString(componentInstance)
      });
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error.');
});

app.listen(3000, () => {
  console.log('Server listening at 3000...');
});
