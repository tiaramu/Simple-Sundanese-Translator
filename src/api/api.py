from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from iter import *

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/sundaindo',methods=['POST'])
@cross_origin()
def sundaindo():
    myData = request.get_json()
    text = myData.get("text")
    result = arrToString(iter(text,"sunda"))
    return jsonify({'data' : result}),200

@app.route('/indosunda',methods=['POST'])
@cross_origin()
def indosunda():
    myData = request.get_json()
    text = myData.get("text")
    result = arrToString(iter(text,"indo"))
    return jsonify({'data' : result}),200