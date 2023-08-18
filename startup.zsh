
# Install dependencies 
npm install  

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

curl -X POST -H "Content-Type: application/json" -d '{"name":"apikeycurl0", "role": "Admin"}' http://admin:$(kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode)@localhost:3000/api/auth/keys > grafana/api_token.json

npm run dev

# KubeReady did all this in a middleware function as part of a startup. 
# implemented it with the npm module child-processes — https://nodejs.org/api/child_process.html 