from webapp import app
from flask import jsonify,request
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

@app.route('/image', methods = ["GET",'POST'])
def image():
    if request.method == 'POST':
        content = request.get_json()
        print(content)
        convert_and_save(content['data']['image64'])
        return "Abhi tk to theek hai"

def convert_and_save(b64_string):
    with open("imageToSave.png", "wb") as fh:
        fh.write(base64.decodebytes(b64_string.encode()))
