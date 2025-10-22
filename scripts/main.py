from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import gspread
from oauth2client.service_account import ServiceAccountCredentials

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

creds = ServiceAccountCredentials.from_json_keyfile_name('../credentials.json', scope)
client = gspread.authorize(creds)

# Open your Google Sheet (replace with your sheet name)
sheet = client.open("IT_Help_Desk_Log").sheet1

@app.route('/api/submit', methods=['POST', 'OPTIONS'])
def submit():
    # Handle preflight request
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        print("Request received!")
        data = request.json
        name = data.get('name')
        issue = data.get('issue')
        
        print(f"Name: {name}, Issue: {issue}")
        
        # Append to Google Sheet
        sheet.append_row([name, issue])
        
        print("Data added to sheet!")
        
        return jsonify({"status": "success"}), 200
    except Exception as e:
        print(f"ERROR: {str(e)}")
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
