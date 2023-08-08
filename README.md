<div align='center'> Insert Logo / Background here<img width="autopx" src=''/>

</div>

# Prism Kubernetes Visualizer

Prism is a Kubernetes and Docker visualizer that helps users understand the status of and relationships between their nodes, pods, services, and containers. It will help developers quickly view their server status and identify problem areas with live metrics and pod health statistics.

< we should put an image of some kind here >

# Geting Started

# Installation 



# Contributions 

# Read More
- Link to Medium Article
- 
# Authors

# Features: currently live

- none yet

# Features: coming soon

- React app renders to index.html



# backend structure

# required actions

MVP
General app actions
- Serve static files
- any button clicks

K8s and project specific actions
- connect to K8s API
  - connect with Prometheus
  - exact method TBD
    - import Prometheus info into grafana
- connect to Grafana API
  - build a visualizer from a query
  - import info from Prom TBD

Stretch!!
General app actions
- auth connections
- connect to a DB

K8s and project specific actions
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

### files and explanations

metricsController.js

- handles all middleware functions

db.js

- establish database connections
- will need a model and schema. Can do with a separate file within this one

userRouter.js

- Express Router. Does what it says on the tin

server.js

- Where the HTTP requests are made/start/return to... I think

---

## Test area for git commits

Hello, my name is Josh
JAMES was here
