from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import json

load_dotenv()

app = Flask(__name__)

# Better CORS configuration
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

# Use environment variable for credentials
# This allows us to store credentials securely without committing the file
if os.path.exists('credentials.json'):
    # Local development - use file
    creds = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)
else:
    # Production - use environment variable
    creds_dict = json.loads(os.getenv('GOOGLE_CREDENTIALS_JSON'))
    creds = ServiceAccountCredentials.from_json_keyfile_dict(creds_dict, scope)

client = gspread.authorize(creds)

# Get sheet name from environment variable
sheet_name = os.getenv('SHEET_NAME', 'IT_Help_Desk_Log')
sheet = client.open(sheet_name).sheet1

@app.route('/api/submit', methods=['POST', 'OPTIONS'])
def submit():
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        from datetime import datetime
        
        print("Request received!")
        data = request.json
        name = data.get('name')
        issue = data.get('issue')
        
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        print(f"Name: {name}, Issue: {issue}, Time: {timestamp}")
        
        sheet.append_row([timestamp, name, issue])
        
        print("Data added to sheet!")
        
        return jsonify({"status": "success"}), 200
    except Exception as e:
        print(f"ERROR: {str(e)}")
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)