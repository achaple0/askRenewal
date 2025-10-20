from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.getenv("GOOGLE_SHEETS_API_KEY")
