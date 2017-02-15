import express from 'express';
import db from './db';

const router = express.Router();

router.get('/submissions', (req, res, next) => {
  db.query('SELECT * FROM submissionanalytics WHERE QUOTED_DATE = "" LIMIT 0,1000', (error, results) => {
    if (error) {
      next(error);
    } else {
      res.json(results);
    }
  });
});

router.get('/submissions/quoted', (req, res, next) => {
  db.query('SELECT * FROM submissionanalytics WHERE QUOTED_DATE != "" LIMIT 0,1000', (error, results) => {
    if (error) {
      next(error);
    } else {
      res.json(results);
    }
  });
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error fetching from database.')
});

export default router;
