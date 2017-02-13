import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app/components/app';

const app = express();

app.set('views', './');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));

const todos = ['eat breakfast', 'take a shower', 'apply to jobs'];

const AppFactory = React.createFactory(App);

app.get('/', (req, res) => {
  const componentInstance = AppFactory({ initialData: todos });
  res.render('index', {
    reactInitialData: JSON.stringify(todos),
    content: renderToString(componentInstance)
  });
});

app.listen(3000, () => {
  console.log('Server listening at 3000...');
})
