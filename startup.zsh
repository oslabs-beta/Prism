
## Prerequisites - minikube installed 
##  your deployment and service yaml files written 
#start minikube 
minikube start --network=socket_vmnet

# deploy app 
# kubectl apply -f deployment.yaml 
# kubectl apply -f service.yaml 
# kubectl expose service solo-project-deployment --type=NodePort --target-port=8080 --name=solo-project-deployment-np

 # minikube service solo-project-deployment-np --url  > proj_url.txt & 

# install and deploy prometheus 
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/prometheus
kubectl expose service prometheus-server --type=NodePort --target-port=9090 --name=prometheus-server-np
# minikube service prometheus-server-np --url & 

# install and  deploy grafana 
helm repo add grafana https://grafana.github.io/helm-charts
helm install -f grafana/config_values.yaml grafana grafana/grafana
kubectl expose service grafana  --type=NodePort --target-port=3000 --name=grafana-np 
# pot forward :  kubectl --namespace default port-forward $POD_NAME 3000
# minikube service grafana-np --url &
sleep 60
while true; do kubectl port-forward deployment/grafana 3000; done  2>&1 &
sleep 5  
# curl -X POST -H "Content-Type: application/json" -d '{"name":"apikeycurl0", "role": "Admin"}' http://admin:$secret@localhost:3000/api/auth/keys > grafana/api_token.json
curl -X POST -H "Content-Type: application/json" -d '{"name":"apikeycurl0", "role": "Admin"}' http://admin:$(kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode)@localhost:3000/api/auth/keys > grafana/api_token.json
# the terminal will be left open so you can see your url to log into grafana. 
# Add data source: http://prometheus-server:80  