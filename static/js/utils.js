// utils.js

function addMessage(message, sender = "bot") {
const div = document.createElement("div");
div.innerHTML = message;
div.className = `p-2 rounded-md max-w-[75%] ${
sender === "user" ? "bg-green-100 text-right ml-auto" : "bg-gray-200 text-left"
}`;
div.classList.add("chat-message", sender);
document.getElementById("chat-box").appendChild(div);
document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}


function sendToGoogleSheet(name, issue) {
  // Automatically detect if we're in development or production
  const apiURL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000/api/submit'
    : 'https://your-domain.com/api/submit';  // Update this when you deploy
  
  fetch(apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, issue: issue }),
  })
  .then(response => response.json())
  .then(data => console.log("Success:", data))
  .catch(error => console.error("Error:", error));
}