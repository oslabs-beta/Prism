import { Router } from 'express';
import metricsController from '../controllers/metricsController';
const router: Router = Router();
// get api key
// when authorization is implemented here, we should route certain api calls through verifytoken middleware
// routes :

// create dashboard
router.post(
  '/',
  metricsController.readDashboardURL,
  (req, res, next) => {
    if (res.locals.dashboardURL) {
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
