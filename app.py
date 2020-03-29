import json 
from api import *
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index(): 
    return render_template('index.html')

@app.route('/init')
def init():
    output = json.dumps(get_data())
    return output
"""
if __name__ == '__main__':
    app.run()
"""
