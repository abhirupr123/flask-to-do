from flask import Flask,request,jsonify
from dotenv import load_dotenv
from pymongo import MongoClient
from flask_cors import CORS
load_dotenv()
import os
app=Flask(__name__)
mongo=MongoClient(os.getenv("MONGO_URL"))
db=mongo.get_database('item')
CORS(app)
@app.route("/new",methods=['POST'])
def data():
    body=request.json
    item=body['item']
    db['name'].insert_one({'Item':item})
    return jsonify({
        'status':200,
        'Item':item
    })

@app.route("/display",methods=['GET'])
def find():
    data=db['name'].find()
    json=[]
    for i in data:
        item=i["Item"]
        dic={
            "Item":item
        }
        json.append(dic)
    return jsonify(json)

@app.route("/delete/<string:item>",methods=['DELETE'])
def delete(item):
    db['name'].delete_one({"Item":item})
    return jsonify({
        "status":200
    })
@app.route("/edit",methods=['POST'])
def edit():
    body=request.json
    prev=body['prev']
    new=body['ne']
    db['name'].replace_one({"Item":prev},{"Item":new})
    return jsonify({
        "status":200,
        "Item":new
    })
if __name__=='__main__':
    app.debug=False
    app.run()
