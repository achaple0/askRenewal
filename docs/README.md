# 🧠 askSharon – IT Directory

askSharon is a simple, interactive **web-based IT directory ** designed to assist users in identifying the correct IT contact or resource for their technical issues. Built using **HTML**, **TailwindCSS**, and **vanilla JavaScript**, it provides a clean, responsive interface that mimics a real-time chat interaction.

---

## 🚀 Features

- 💬 **Conversational Interface:** Guides users step-by-step through IT issue selection.  
- 🧩 **Dynamic Dropdowns:** Displays relevant options depending on the issue selected (passwords, software, etc).  
- ☁️ **Google Sheets Integration:** Logs user name and issue details through a connected Apps Script endpoint.  
- 🎨 **TailwindCSS Styling:** Clean, modern, and mobile-responsive UI.  
- 🔄 **Restart Functionality:** Allows users to restart the conversation anytime with a single click.

---

## 🧱 Technologies Used

| Category | Technology |
|-----------|-------------|
| Frontend | HTML5, TailwindCSS, JavaScript (ES6)         |
| Backend Integration | Google Apps Script Webhook, Python |
| Data Storage | Google Sheets (via API endpoint)         |

---

## ⚙️ How It Works

1. The  begins by asking for the user’s **full name**.  
2. It then presents an **issue dropdown** (Password, Email, Hardware, etc.).  
3. Depending on the selection, additional context menus appear for **specific subcategories**.  
4. The bot provides contact information or instructions automatically.  
5. The user’s name and selected issue are sent to a Google Sheet for **tracking or analytics**.

---

## 📸 Example Screenshot

<img width="1919" height="992" alt="image" src="https://github.com/user-attachments/assets/1488c6e5-6582-4318-81d7-65bd4d112002" />



---

## 💾 Setup & Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/<your-username>/askSharon.git
   cd askSharon
   ```

2. Open the `index.html` file in your browser.

3. (Optional) To enable data logging:

   * Replace the existing Google Apps Script URL with your own endpoint in the `sendToGoogleSheet()` function.

---

## 🧠 Future Improvements

* 🧑‍💻 Add AI-based intent recognition to interpret free-text input.
* 🧭 Implement persistent chat history with localStorage or database support.
* 🔔 Integrate automated ticket creation for IT systems (e.g., ServiceNow or Zendesk).
* 🌐 Deploy as a PWA for offline access.

---

## 👨‍💻 Author

**Angel Chaple**
IT Specialist | Developer | Systems Enthusiast
📧 [achaplejw@gmail.com](mailto:achaplejw@gmail.com)
💼 [LinkedIn](https://www.linkedin.com/in/angelchaple)
🌐 [GitHub](https://github.com/achaple0)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


