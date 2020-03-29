import json 
from api_requests import *
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index(): 
    return render_template('index.html')

@app.route('/init')
def init():
    output = json.dumps(get_data())
    return output

@app.route('/globalcases')
def GlobalCases():
    #output = json.dumps(get_data())
    return jsonify(get_data())

@app.route('/news')
def news():
    output = jsonify(get_news())
    return output


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r
    
if __name__ == '__main__':
    app.run()
    