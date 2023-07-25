import { Router } from 'express';
import metricsController from '../controllers/metricsController.js';
const router = Router();
// get api key

// routes :

// create dashboard
router.post(
  '/',
  metricsController.createDashboard,
  metricsController.getDashboardURL,
  (req, res) => res.status(200).send(res.locals.iframe)
);

// get dashboard panel with specific id
router.get('/', metricsController.getDashboardURL, (req, res) =>
  res.send(res.locals.iframe)
);

export default router;
