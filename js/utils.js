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


async function sendToGoogleSheet(name, issue) {
  try {
    // Step 1: Get config from Flask
    const configResponse = await fetch("http://localhost:5000/api/config");
    const config = await configResponse.json();
    const endpoint = config.GOOGLE_SHEET_URL;

    // Step 2: Use the endpoint dynamically
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, issue }),
    });

    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
