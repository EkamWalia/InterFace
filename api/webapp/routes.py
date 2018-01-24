from webapp import app
from flask import jsonify,request
from random import randint
from flask.ext.uploads import UploadSet, configure_uploads, IMAGES

photos = UploadSet('photos', IMAGES)

app.config['UPLOADED_PHOTOS_DEST'] = 'img'
configure_uploads(app, photos)

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

@app.route('/image',methods = ["GET",'POST'])
def image():
    if request.method == 'POST':
        print(request.files)
        imageFile = photos.save(request.files['photo'])
        return "Abhi tk to theek hai"
