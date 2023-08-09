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
### Requirements

- [ ] Running cluster in Kubernetes/ Minikube
- [ ] ports free: 
- [ ] 8080  ( where the application will be located)
- [ ] 3333  (used by the backend of the application)
- [ ] 3000 (used by Grafana)
### Steps : 
- [ ] Fork and clone into the repository
- [ ] Create a .env file in the root directory with the following:
  - [ ] your MONGO_URI
  - [ ] CLIENT_ID for GitHub Oauth
  - [ ] CLIENT_SECRET of your choice
- [ ] Execute the startup shell script (run `./startup.zsh`) - this will: 
  - [ ] Install Prometheus 🔥 and Grafana 📊 onto your cluster with our custom configuration
  - [ ] Start up the web application 

- [ ] Go to `http://localhost:8080` and view metrics to your heart's desire 🤩


## Contribute to the project

- View our Contributor README

## Features: coming soon


| Feature                                                                               | Status    |
|---------------------------------------------------------------------------------------|-----------|
| Typescript                                                                            | ✅        |
| Plugin ecosystem for your favorite component framework (React, Vue, Svelte, etc)      | ✅        |
| Component pages                                                                       | ✅        |
| Component shortcodes                                                                  | ✅        |
| SCSS and SASS                                                                         | ⏳        |
| PostCSS config (ex. Tailwind)                                                         | ⏳        |
| CSS imports via ESM (including CSS modules)                                           | ⏳        |
| Shared state between any component shortcode                                          | 🙏🏻        |


## Read More

[Checkout our article on Medium!](https://medium.com) 


## Authors

- list of all people and our links
- [Bezzy](https://github.com/joshuarhall) 
- [Dawit](https://github.com/joshuarhall) 
- [James](https://github.com/joshuarhall) 
- [Josh Hall](https://github.com/joshuarhall) 
- [Paul](https://github.com/joshuarhall) 


