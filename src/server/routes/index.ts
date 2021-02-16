import express from 'express';
import axios from 'axios';
import { API_URL } from '../config';

const Routes = (app: express.Application) => {
  const router = express.Router();

  app.use(router);

  router.post('/api/message', async (req, res, next) => {
    const { body: message } = req;
    try {
      await axios({
        url: `${API_URL}/api/message`,
        method: 'post',
        data: message,
      });
      res.status(200).json({
        data: message,
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/api/mail', async (req, res, next) => {
    const { body: email } = req;
    try {
      await axios({
        url: `${API_URL}/api/mail`,
        method: 'post',
        data: email,
      });
      res.status(200).json({
        data: email,
      });
    } catch (error) {
      next(error);
    }
  });
};

export default Routes;
