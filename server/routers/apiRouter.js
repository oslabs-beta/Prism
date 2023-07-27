import { Router } from 'express';
import metricsController from '../controllers/metricsController.js';
//import userController from '../controllers/userController.js';
const router = Router();
// get api key
// when authorization is implemented here, we should route certain api calls through verifytoken middleware
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
