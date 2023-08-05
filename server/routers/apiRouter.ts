import { Router } from 'express';
import metricsController from '../controllers/metricsController';
const router = Router();
// get api key

// routes :

// create dashboard
router.post(
  '/',
  metricsController.readDashboardURL,
  (req, res, next) => {
    console.log('locals check: ', res.locals);
    if (res.locals.dashboardURL) {
      // do nothing
      return next();
    } else {
      console.log('calling createDashboard');
      return metricsController.createDashboard(req, res, next);
    }
  },
  metricsController.writeDashboardURL,
  metricsController.getDashboardIframeURL,
  (req, res) => res.status(200).json(res.locals.iframe)
);

// get dashboard panel with specific id (currently not in use )
router.get(
  '/dashboard',
  metricsController.readDashboardURL,
  metricsController.getDashboardIframeURL,
  (req, res) => res.json(res.locals.iframe)
);

// router.get('/install', installPrometheus, installGrafana, (req, res) => {
//   return res.status(200).send('installed');
// });

export default router;
