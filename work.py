import requests
url = 'https://api.rootnet.in/covid19-in/stats/latest'
data = requests.get(url)
print(data.content)