import express from 'express';
import db from '../db';

const router = express.Router();
const SubmissionAnalytics = db.model('submissionanalytics');

router.get('/reviewed', (req, res, next) => {
  SubmissionAnalytics.findAll({
    where: {
      QUOTED_DATE: //whatever
    }
  })
  .then(submissions => {
    res.json(submissions);
  })
  .catch(next);
});

router.get('/not-reviewed', (req, res, next) => {
  SubmissionAnalytics.findAll({
    where: {
      QUOTED_DATE: {
        $ne: //whatever
      }
    }
  })
  .then(submissions => {
    res.json(submissions);
  })
  .catch(next);
});

export default router;
