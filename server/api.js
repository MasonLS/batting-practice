import express from 'express';
import db from '../db';

const router = express.Router();
const SubmissionAnalytics = db.model('submissionanalytics');

const router = express.Router();

router.get('/submissions', (req, res, next) => {
  SubmissionAnalytics.findAll({
    where: {
      QUOTED_DATE: ''
    }
  })
  .then(quotedSubmissions => {
    res.json(quotedSubmissions)
  })
  .catch(next);
});

router.get('/submissions/quoted', (req, res, next) => {
  SubmissionAnalytics.findAll({
    where: {
      QUOTED_DATE: {
        $ne: ''
      }
    }
  })
  .then(quotedSubmissions => {
    res.json(quotedSubmissions)
  })
  .catch(next);
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error fetching from database.')
});

export default router;
