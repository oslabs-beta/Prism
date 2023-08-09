<div align='center'> Insert Logo / Background here<img width="autopx" src=''/>
  
![Build Passing](https://img.shields.io/badge/build-awesome-brightgreen)

</div>



# Introducing Prism!

Prism is a Kubernetes and Docker visualizer that helps users understand the status of and relationships between their nodes, pods, services, and containers. It will help developers quickly view their server status and identify problem areas with live metrics and pod health statistics.

< we should put an image of some kind here >


## Features: currently live

- connect to K8s API
  - connect with Prometheus
  - exact method TBD
    - import Prometheus info into grafana
- connect to Grafana API
  - build a visualizer from a query
  - import info from Prom TBD
- customizable dashboards
    - Dependency: authentication 
    - Save list of selected metrics to a user-dashboards db
- cluster relationship visualizer (Rancher)
    - lines between the clusters? 
    - once we understand Grafana, we can plan this better
- Pod view with more detail
    - Exact data TBD
- Historical data - more than just live status
    - dependency: auth & DB
    - What info can we get? 
        - how much history should we save? 
        - do we include logs, or just up time? What specific data
    - Where to save? 
        - Local cache? 
        - Save to DB? 
    - Refresh rate (API call frequency)

## Geting Started

<here we will list the process of getting everything set up >
- forking the repo
- making any adjustments for Grafana and Prometheus, etc,
- detailing exact instructions on how to use it.
- Include how to sign up
  
### Project overview: files summary

metricsController.js

- handles all middleware functions

db.js

- establish database connections
- will need a model and schema. Can do with a separate file within this one

userRouter.js

- Express Router. Does what it says on the tin

server.js

- Where the HTTP requests are made/start/return to... I think

## Contribute to the project

- how people can contribute here


## Features: coming soon

- React app renders to index.html
- General app actions
- auth connections
- connect to a DB
- Serve static files
- any button clicks

## Read More

[Checkout our article on Medium!](https://medium.com) 


## Authors

- list of all people and our links
- [Bezzy](https://github.com/joshuarhall) 
- [Dawit](https://github.com/joshuarhall) 
- [James](https://github.com/joshuarhall) 
- [Josh Hall](https://github.com/joshuarhall) 
- [Paul](https://github.com/joshuarhall) 


