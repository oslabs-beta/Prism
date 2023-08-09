<div align='center'> <img width="500px" height="250px" src='./Prism logo 1.png'/>

![Kubernetes](https://img.shields.io/badge/Kubernetes-326ce5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E7532D?style=for-the-badge&logo=prometheus&logoColor=white)
![Prometheus](https://img.shields.io/badge/Grafana-F69920?style=for-the-badge&logo=grafana&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Node](https://img.shields.io/badge/-node-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Mongo](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)
</div>



# Introducing Prism!

Prism is a Kubernetes and Docker visualizer that helps users understand the status of and relationships between their nodes, pods, services, and containers. It will help developers quickly view their server status and identify problem areas with live metrics and pod health statistics.
Our goal for this project was to provide the best possible user experience while minimizing the code a user has to write (everything launches with a single command). 
< we should put an image of some kind here >

## Features

| Feature                                                                               | Status    |
|---------------------------------------------------------------------------------------|-----------|
| Prometheus and Grafana Intergration                                                   | ✅        |
| Custom Dashboard                                                                      | ✅        |
| an Overview, Pods view and Node view of metrics                                       | ✅        |
| SASS and Tailwind CSS                                                                 | ✅        |
| Typescript conversion                                                                 | ✅        |
| Testing (React Testing Library/Jest front-end, Supertest backend)                     | ⏳        |
| Fully intergrated OAuth/User authentication                                           | ⏳        |
| Customizable Dashboards                                                               | 🙏🏻        |
| Historcial Data and Trends                                                            | 🙏🏻        |

Done =  ✅ 
<br>
In Progress = ⏳
<br>
Looking for contributors = 🙏🏻

## Getting Started
### Requirements

- [ ] Running cluster in Kubernetes/ Minikube
- [ ] The following ports must be free: 
  - [ ] 8080  ( where the application will be located)
  - [ ] 3333  (used by the backend of the application)
  - [ ] 3000 (used by Grafana)
### Steps : 
- [ ] Fork and clone into the repository
- [ ] Create a `.env` file in the root directory with the following:
  - [ ] Your MongoDB URI (key `MONGO_URI`) OR: 
  - [ ] A client ID and secret for Github Oauth: keys `CLIENT_ID`, `CLIENT_SECRET`
- [ ] Execute the startup shell script (run `./startup.zsh`) - this will:
  - [ ] Install necessary dependencies for the web application  
  - [ ] Install Prometheus 🔥 and Grafana 📊 onto your cluster with our custom configuration
  - [ ] Start up the web application 

- [ ] Go to `http://localhost:8080` and view metrics to your heart's desire 🤩


## Contribute to the project

- View our [Contributor README](/DEV_README.md)

## Read More

[Check out our article on Medium!](https://medium.com) 


## Authors

- list of all people and our links
- [Bezzy](https://github.com/joshuarhall) 
- [Dawit](https://github.com/joshuarhall) 
- [James](https://github.com/joshuarhall) 
- [Josh Hall](https://github.com/joshuarhall) 
- [Paul](https://github.com/joshuarhall) 


