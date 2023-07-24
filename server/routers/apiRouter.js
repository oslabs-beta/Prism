import { Router } from 'express';
import metricsController from '../controllers/metricsController.js';
const router = Router();
// get api key

// routes :

// create dashboard
router.post('/', metricsController.createDashboard, (req, res) =>
  res.status(200).json(res.locals.dashboard)
);

// get dashboard panel with specific id
router.get('/', metricsController.getDashboardURL, (req, res) =>
  res.send(res.locals.iframe)
);

export default router;
