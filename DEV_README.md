# A Presumptive Thank You
We're so excited that you're thinking about contributing to our application! We built this thinking of the many great directions in which it could go and are very grateful to those who would take it upon themselves to help. 

# Possible Directions for Future Work 

## ⚛️ State management and Database Optimization 
Proper authentication and caching would increase security and enhance the user experience. This will require more comprehensive state management and a close look at what might be best to save in order to persist between reloads. 

Additionally, database caching of the dashboard panel URLs would also easily allow a mobile application to become feasible.

## Customizable dashboards
It would make for an even better UX if users were able to freely resize and move dashboards in a way that would save in state (possibly persist through the database). 

## 🃏 Test Coverage
The current level of test coverage is very limited to route unit tests and a few key react components. 
Room for improvement includes: 
- [ ] Unit testing for middleware controllers
- [ ] Route testing could be updated to include token authentication 
- [ ] State management integration testing

## 🚨 Health Alert Notifications
In addition to allowing the user to view health, it would be useful for the application to be able to send notifications (could be on Slack or a mobile app notification) if something is wrong. This should be achievable using [Grafana's API](https://grafana.com/docs/grafana/latest/alerting/set-up/). 

## 🛜 Inter-Cluster Network Views
At a level above a single cluster, we think it would be of user benefit to be able to view relationships among more than one running cluster. 
This is perhaps the most ambitious stretch feature in its requirement to extend our application's understanding of the configuration of and access to one cluster  to multiple, but it's also one of the most exciting! 

# File structure

