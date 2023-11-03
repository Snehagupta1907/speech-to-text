import os
from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

base_url = "https://api.assemblyai.com/v2"
api_key = "488f1577026a4fd58a090d39fa1cf685"
react_app_assets_dir = "../client/src/assets/" 

@app.route("/upload", methods=["POST"])
def upload_file():
    file = request.files['file']
    if file:
        file.save(os.path.join(react_app_assets_dir, file.filename))
        headers = {"authorization": api_key}
        with open(os.path.join(react_app_assets_dir, file.filename), "rb") as f:
            response = requests.post(base_url + "/upload", headers=headers, data=f)
            upload_url = response.json()["upload_url"]
            return jsonify({"upload_url": upload_url})
    return jsonify({"error": "File not found"}), 400

@app.route("/transcript", methods=["POST"])
def create_transcript():

    data = request.get_json()
    headers = {"authorization": api_key, "content-type": "application/json"}
    response = requests.post(base_url + "/transcript", json=data, headers=headers)
    return jsonify(response.json())

if __name__ == "__main__":
    os.makedirs("uploads", exist_ok=True)
    app.run(debug=True)
