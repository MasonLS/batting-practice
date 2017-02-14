import express from 'express';
import submissionsRouter from './submissions';
import quotedRouter from './quoted';

const router = express.Router();

router.use('/submissions', submissionsRouter);
router.use('/quoted', quotedRouter);

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error fetching from database.')
});

export default router;
