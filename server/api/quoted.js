import express from 'express';
import db from '../db';

const router = express.Router();
const SubmissionAnalytics = db.model('submissionanalytics');

router.get('/accepted', (req, res, next) => {
  SubmissionAnalytics.findAll({
    where: {
      POL_NUM: {
        $ne: //whatever
      }
    }
  })
  .then(quotedSubmissions => {
    res.json(quotedSubmissions)
  })
  .catch(next);
});

router.get('/rejected', (req, res, next) => {
  SubmissionAnalytics.findAll({
    where: {
      REJECTED_DATE: {
        $ne: //whatever
      }
    }
  })
  .then(quotedSubmissions => {
    res.json(quotedSubmissions)
  })
  .catch(next);
});

router.get('/no-response', (req, res, next) => {
  SubmissionAnalytics.findAll({
    where: {
      POL_NUM: //whatever,
      REJECTED_DATE: //whatever
    }
  })
  .then(quotedSubmissions => {
    res.json(quotedSubmissions)
  })
  .catch(next);
});

export default router;
