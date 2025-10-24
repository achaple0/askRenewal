// main.js 

let currentQuestion = 0;
let userName = "";
const chatBox = document.getElementById("chat-box");


function handleSelection() {
const nameInput = document.getElementById("user-input");
const issueSelect = document.getElementById("issue-select");
const passwordSelect = document.getElementById("password-select");
const softwareSelect = document.getElementById("software-select");


if (currentQuestion === 0) {
const name = nameInput.value.trim();
if (!name) return;
userName = name;
addMessage(name, "user");
addMessage(`Nice to meet you, ${userName}! What kind of problem are you having?`, "bot");
nameInput.classList.add("hidden");
issueSelect.classList.remove("hidden");
currentQuestion++;
return;
}


// Password logic, same as before
if (!issueSelect.classList.contains("hidden") && issueSelect.value === "password") {
if (passwordSelect.classList.contains("hidden")) {
addMessage(responses.password, "bot");
passwordSelect.classList.remove("hidden");
issueSelect.classList.add("hidden");
return;
}
}


if (!passwordSelect.classList.contains("hidden")) {
const passwordType = passwordSelect.value;
if (!passwordType) return;
addMessage(passwordType, "user");
addMessage(passwordSupport[passwordType], "bot");
sendToGoogleSheet(userName, passwordType);
passwordSelect.classList.add("hidden");
return;
}


if (!softwareSelect.classList.contains("hidden")) {
const software = softwareSelect.value;
if (!software) return;
addMessage(software, "user");
addMessage(softwareSupport[software], "bot");
sendToGoogleSheet(userName, software);
softwareSelect.classList.add("hidden");
issueSelect.classList.add("hidden");
return;
}


if (!issueSelect.classList.contains("hidden")) {
const issue = issueSelect.value;
if (!issue) return;
addMessage(issue, "user");
addMessage(responses[issue], "bot");
sendToGoogleSheet(userName, issue);


if (issue === "software") {
softwareSelect.classList.remove("hidden");
issueSelect.classList.add("hidden");
} else {
issueSelect.classList.add("hidden");
}
return;
}
}


function resetChat() {
chatBox.innerHTML = "";
document.getElementById("user-input").classList.remove("hidden");
document.getElementById("issue-select").classList.add("hidden");
document.getElementById("password-select").classList.add("hidden");
document.getElementById("software-select").classList.add("hidden");
document.getElementById("user-input").value = "";
currentQuestion = 0;
userName = "";
addMessage("Hello, please enter your full name:", "bot");
}


addMessage("Hello, please enter your full name:", "bot");