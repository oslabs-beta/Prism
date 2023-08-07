import fs from 'fs';
import path from 'path';
import { Controller, middlewareError } from 'types/types';
import { execFile, spawn } from 'node:child_process';

interface apiKeyObject {
  id?: number;
  name?: string;
  key?: string;
  message?: string;
}

const readAPIKey = (): apiKeyObject => {
  // we're reading the api token from a file here. we could store it in a cookie instead, but
  return JSON.parse(
    fs
      .readFileSync(path.resolve(__dirname, '../../grafana/api_token.json'))
      .toString()
  );

  // ‼️ NOTE: authorization header must be 'Bearer ' + apiKey ‼️
};

const metricsController: Controller = {
  //testButton method

  // methodName: (req, res, next) => {},
  // read api key so we can send requests
  // save in res.locals for now
  // createDashboard
  createDashboard: (req, res, next) => {
    // save api Key
    const apiKeyObj: apiKeyObject = readAPIKey();
    const apiKey: string | undefined = apiKeyObj.key;

    // if api key comes back undefined, something is wrong
    if (!apiKey) {
      const error: middlewareError = {
        log: `Error occurred in createDashboard middleware: ${apiKeyObj.message}`,
        status: 424,
      };
      return next(error);
    }

    const dashboardJSON: Object = JSON.parse(
      fs
        .readFileSync(
          path.resolve(__dirname, '../../grafana/dashboards/mvp_dashboard.json')
        )
        .toString()
    );

    const dashboardObject: Object = {
      dashboard: dashboardJSON,
      overwrite: true,
    };
    // res.locals.dashboard = dashboardJSON;

    //🎯 TODO:  make request to create dashboard in grafana
    // post fetch request with authorization header
    const dashboardProvision: string = JSON.stringify(dashboardObject);
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
        if (!data.url) return Promise.reject(new Error(data.message));
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
    if (res.locals.dashboardURL) {
      // set url to session cookie instead of writing to file
      res.cookie('url', res.locals.dashboardURL, { maxAge: 60 * 60 * 1000 });
    }

    return next();
  },

  readDashboardURL: (req, res, next) => {
    if (req.cookies.url) res.locals.dashboardURL = req.cookies.url;

    res.locals.urlSaved = res.locals.dashboardURL
      ? res.locals.dashboardURL.length > 0
      : false;

    return next();
  },

  // get dashboard iframe info
  getDashboardIframeURL: (req, res, next) => {
    // make fetch request for dashboard to get its url
    // this can be source for iframe

    const dashboardURL: string = res.locals.dashboardURL;
    //console.log('dashboard URL in controller: ', res.locals.dashboardURL);
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
