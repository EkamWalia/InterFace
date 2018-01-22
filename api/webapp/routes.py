from webapp import app
from flask import jsonify

@app.route("/")
def index():
    return "Hello World"

@app.route('/test')
def test() :
    d = {}

    d['hello'] = 'world'
    d['plis'] = 'to work'

    return jsonify(d)
