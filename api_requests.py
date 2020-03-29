import requests
import json

response_cases = requests.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
response_news = requests.get('https://newsapi.org/v2/everything?q=coronavirus&apiKey=a89575bd74f04ddfa6fc1b1e2aa7c30a')

cases_json = response_cases.json()

news_json = response_news.json()

def get_data():
    ans1 = cases_json['locations']
    res = sorted(ans1, key = lambda i: i['latest']['confirmed'],reverse=True) 
    return res

def get_news():
    return news_json['articles']