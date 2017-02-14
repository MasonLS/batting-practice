import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app/components/app';
import apiRouter from './api.js';
import db from './db';

const app = express();
const SubmissionAnalytics = db.model('submissionanalytics');

app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));

app.use('/api', apiRouter);

const AppFactory = React.createFactory(App);

app.get('/', (req, res) => {
  SubmissionAnalytics.findAll(
    where: {
      QUOTED_DATE: ''
    }
  )
  .then(submissions => {
    const componentInstance = AppFactory({ initialData: submissions });

    res.render('index', {
      reactInitialData: JSON.stringify(submissions),
      content: renderToString(componentInstance)
    });
  })
  .catch(next);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error.');
});

app.listen(3000, () => {
  console.log('Server listening at 3000...');
})
