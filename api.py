import requests
import json
#import numpy as np

response = requests.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations")

ans = response.json()

def get_data():
    ans1 = ans['locations']
    res = sorted(ans1, key = lambda i: i['latest']['confirmed'],reverse=True) 
    return res