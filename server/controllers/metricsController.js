import fs from 'fs';
//import fsCallback from 'fs';
import path from 'path';
import url from 'url';

const readAPIKey = () => {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  // read JSON from file
  const apiKeyObject = JSON.parse(
    fs
      .readFileSync(path.resolve(__dirname, '../../grafana/api_token.json'))
      .toString()
  );

  // ‼️ NOTE: authorization header must be 'Bearer ' + apiKey ‼️
  return apiKeyObject.key;
};

const metricsController = {
  //testButton method

  // methodName: (req, res, next) => {},
  // read api key so we can send requests
  // save in res.locals for now
  // createDashboard
  createDashboard: (req, res, next) => {
    // save api Key
    const apiKey = readAPIKey();
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    // get our dashboard json
    // eslint-disable-next-line no-undef
    // console.log('createDashboard entered');
    // console.log(__dirname);
    // consoMle.log(path.resolve(__dirname, '../../sample_dashboard.json'));
    const dashboardJSON = JSON.parse(
      fs
        .readFileSync(
          path.resolve(__dirname, '../../grafana/dashboards/mvp_dashboard.json')
        )
        .toString()
    );
    const dashboardObject = {
      dashboard: dashboardJSON,
      overwrite: true,
    };
    // res.locals.dashboard = dashboardJSON;

    //🎯 TODO:  make request to create dashboard in grafana
    // post fetch request with authorization header
    const dashboardProvision = JSON.stringify(dashboardObject);
    //console.log(dashboardProvision);
    //console.log('type: ', typeof dashboardProvision);
    fetch('http://localhost:3000/api/dashboards/db', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: dashboardProvision,
    })
      .then((response) => response.json())
      .then((data) => {
        res.locals.dashboardURL = data.url;
        // sample response url property : /d/a0568fed-94d0-4eba-a617-6507426ad032/production-overview
        console.log('data: ', data);
        console.log('data URL: ', res.locals.dashboardURL);
        return next();
      })
      .catch((err) =>
        next({
          log: 'Error occurred in createDashboard middleware',
          status: 424,
          message: { error: err },
        })
      );
  },

  writeDashboardURL: (req, res, next) => {
    // only write the dashboard if it doesn't already exist as a cookie - and save it as one
    if (!res.locals.urlSaved || res.locals.dashboardURL) {
      //const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
      console.log('entering write dashboard url middleware');

      console.log(
        'writing dashboard URL : ',
        res.locals.dashboardURL,
        'to cookie'
        //path.resolve(__dirname, '../../grafanaInfo/dashboardURL.json')
      );
      // set url to session cookie instead of writing to file
      res.cookie('url', res.locals.dashboardURL);
      // saves to file - changing this to cookie
      // fs.writeFileSync(
      //   path.resolve(__dirname, '../../grafanaInfo/dashboardURL.json'),
      //   res.locals.dashboardURL
      // );
    }

    return next();
  },

  readDashboardURL: (req, res, next) => {
    console.log('entering read dashboard middleware');
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

    if (req.cookies.url) res.locals.dashboardURL = req.cookies.url;
    // else {
    //   try {
    //     res.locals.dashboardURL = fs
    //       .readFileSync(
    //         path.resolve(__dirname, '../../grafanaInfo/dashboardURL.json')
    //       )
    //       .toString();
    //   } catch {
    //     res.locals.urlSaved = false;
    //   }
    // }
    res.locals.urlSaved = res.locals.dashboardURL
      ? res.locals.dashboardURL.length > 0
      : false;

    return next();
  },

  // get dashboard iframe info
  getDashboardIframeURL: (req, res, next) => {
    // make fetch request for dashboard to get its url
    // this can be source for iframe
    // const apiKey = readAPIKey();
    //const dashboardURLTest =
    //  'http://localhost:64090/d/e13e401a-7d5e-456b-a57f-9a745508ceca/production-overview';
    const dashboardURL = res.locals.dashboardURL;
    console.log('dashboard URL in controller: ', res.locals.dashboardURL);
    // console.log('in DashboardURL', dashboardURL);
    // url comes in as something like :
    // we need to turn into:  http://localhost:64090/d-solo/e13e401a-7d5e-456b-a57f-9a745508ceca/production-overview?panelId=2
    //let dashboardURLTestSrc = dashboardURL.replace('/d/', '/d-solo/');
    res.locals.iframe = {
      frameURL: `http://localhost:3000${dashboardURL.replace(
        '/d/',
        '/d-solo/'
      )}?panelId=1`,
    };
    // console.log('iframe', res.locals.iframe);
    return next();
  },
};

export default metricsController;
