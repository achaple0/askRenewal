# 🧠 askRenewal – IT Help Chatbot

askRenewal is a simple, interactive **web-based IT directory chatbot** designed to assist users in identifying the correct IT contact or resource for their technical issues. Built using **HTML**, **TailwindCSS**, and **vanilla JavaScript**, it provides a clean, responsive interface that mimics a real-time chat interaction.

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
| Frontend | HTML5, TailwindCSS, JavaScript (ES6) |
| Backend Integration | Google Apps Script Webhook |
| Data Storage | Google Sheets (via API endpoint) |

---

## ⚙️ How It Works

1. The chatbot begins by asking for the user’s **full name**.  
2. It then presents an **issue dropdown** (Password, Email, Hardware, etc.).  
3. Depending on the selection, additional context menus appear for **specific subcategories**.  
4. The bot provides contact information or instructions automatically.  
5. The user’s name and selected issue are sent to a Google Sheet for **tracking or analytics**.

---

## 📸 Example Screenshot

*(Optional: Add an image of your chatbot UI here)*

```bash
![askRenewal Screenshot](screenshot.png)
