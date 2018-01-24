from webapp import app
from flask import jsonify
from random import randint

@app.route("/")
def index():
    return "Hello World"

@app.route('/test')
def test() :
    response = {}
    functions = ["scrollUp","scrollDown","scrollLeft","scrollRight","zoomIn","zoomOut"]

    for i in functions :
        response[i] = 0

    ind  = randint(0,5)
    response[functions[ind]] = 1

    #response['scrollUp'] = 1
    return jsonify(response)

@app.route('/test1')
def test1():
    response = {}
    response['FUCK'] = "CHALO"

    return jsonify(response)

@app.route('/image')
def image():
    return "Abhi tk to theek hai"
