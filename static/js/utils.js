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

function sendToGoogleSheet(conversationState) {
  fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: conversationState.name,
      primaryIssue: conversationState.primaryIssue,
      subIssue: conversationState.subIssue || ""  // Empty string if no sub-issue
    }),
  })
  .then(response => response.json())
  .then(data => console.log("Success:", data))
  .catch(error => console.error("Error:", error));
}