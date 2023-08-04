import { Router } from 'express';
import metricsController from '../controllers/metricsController.js';
const router = Router();
// get api key

// routes :

// create dashboard
router.post(
  '/',
  metricsController.readDashboardURL,
  (req, res, next) => {
    console.log('locals check: ', res.locals);
    if (res.locals.urlSaved) {
      // do nothing
      return next();
    } else {
      return metricsController.createDashboard(req, res, next);
    }
  },
  metricsController.writeDashboardURL,
  metricsController.getDashboardIframeURL,
  (req, res) => res.status(200).json(res.locals.iframe)
);

// get dashboard panel with specific id
router.get(
  '/dashboard',
  metricsController.readDashboardURL,
  metricsController.getDashboardIframeURL,
  (req, res) => res.json(res.locals.iframe)
);

export default router;
