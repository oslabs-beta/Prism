import fs from 'fs';
//import fsCallback from 'fs';
import path from 'path';
import url from 'url';

const readAPIKey = () => {
  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  // read JSON from file
  const apiKeyObject = JSON.parse(
    fs
      .readFileSync(path.resolve(__dirname, '../../grafanaInfo/api_token.json'))
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
        .readFileSync(path.resolve(__dirname, '../../sample_dashboard.json'))
        .toString()
    );
    // res.locals.dashboard = dashboardJSON;

    //🎯 TODO:  make request to create dashboard in grafana
    // post fetch request with authorization header
    console.log(dashboardJSON);
    fetch('http://localhost:3000/api/dashboards/db', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: dashboardJSON,
    })
      .then((response) => response.json())
      .then((data) => {
        res.locals.dashboard = data;

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

  // get dashboard iframe info
  getDashboardURL: (req, res, next) => {
    // make fetch request for dashboard to get its url
    // this can be source for iframe
    const apiKey = readAPIKey();
    const dashboardURLTest =
      'http://localhost:64090/d/e13e401a-7d5e-456b-a57f-9a745508ceca/production-overview';
    // url comes in as something like :
    // we need to turn into:  http://localhost:64090/d-solo/e13e401a-7d5e-456b-a57f-9a745508ceca/production-overview?orgId=1&refresh=5s&from=1690209750061&to=1690231350061&panelId=2
    let dashboardURLTestSrc = dashboardURLTest.replace('/d/', '/d-solo/');
    res.locals.iframe = dashboardURLTestSrc;
    return next();
  },
};

export default metricsController;
