
## Prerequisites - minikube installed 
##  your deployment and service yaml files written 
#start minikube 
minikube start 

# deploy app 
kubectl apply -f deployment.yaml 
kubectl apply -f service.yaml 


# prometheus 
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/prometheus
kubectl expose service prometheus-server --type=NodePort --target-port=9090 --name=prometheus-server-np
minikube service prometheus-server-np --url & 

# deploy grafana 
helm repo add grafana https://grafana.github.io/helm-charts
helm install grafana grafana/grafana
kubectl expose service grafana --type=NodePort --target-port=3000 --name=grafana-np 
# Your secret for logging into grafana will be stored in secret.txt
kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode > secret.txt
minikube service grafana-np --url
# the terminal will be left open so you can see your url to log into grafana. 

