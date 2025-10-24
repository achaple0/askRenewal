from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import json
from datetime import datetime
import pytz  # Add this

load_dotenv()

app = Flask(__name__, static_folder='static', static_url_path='/static')

CORS(app, resources={
    r"/api/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Google Sheets setup
scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']

if os.path.exists('credentials.json'):
    creds = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)
else:
    creds_dict = json.loads(os.getenv('GOOGLE_CREDENTIALS_JSON'))
    creds = ServiceAccountCredentials.from_json_keyfile_dict(creds_dict, scope)

client = gspread.authorize(creds)

sheet_name = os.getenv('SHEET_NAME', 'IT_Help_Desk_Log')
sheet = client.open(sheet_name).sheet1

@app.route('/api/submit', methods=['POST', 'OPTIONS'])
def submit():
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        print("Request received!")
        data = request.json
        name = data.get('name')
        issue = data.get('issue')
        
        # Use Eastern Time
        eastern = pytz.timezone('America/New_York')
        timestamp = datetime.now(eastern).strftime("%Y-%m-%d %I:%M:%S %p")  # Added AM/PM
        
        print(f"Name: {name}, Issue: {issue}, Time: {timestamp}")
        
        sheet.append_row([timestamp, name, issue])
        
        print("Data added to sheet!")
        
        return jsonify({"status": "success"}), 200
    except Exception as e:
        print(f"ERROR: {str(e)}")
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)