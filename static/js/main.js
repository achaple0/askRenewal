// main.js

let currentQuestion = 0;
let userName = "";
const chatBox = document.getElementById("chat-box");

// NEW: Conversation state tracker
let conversationState = {
  name: "",
  primaryIssue: "",
  subIssue: ""
};

// NEW: Function to reset conversation state
function resetConversationState() {
  conversationState = {
    name: "",
    primaryIssue: "",
    subIssue: ""
  };
}

function handleSelection() {
  const nameInput = document.getElementById("user-input");
  const issueSelect = document.getElementById("issue-select");
  const passwordSelect = document.getElementById("password-select");
  const softwareSelect = document.getElementById("software-select");

  // Handle name input
  if (currentQuestion === 0) {
    const name = nameInput.value.trim();
    if (!name) return;
    
    userName = name;
    conversationState.name = name;  // Store in state
    
    addMessage(name, "user");
    addMessage(`Nice to meet you, ${userName}! What kind of problem are you having?`, "bot");
    
    nameInput.classList.add("hidden");
    issueSelect.classList.remove("hidden");
    currentQuestion++;
    return;
  }

  // Handle password sub-menu
  if (!passwordSelect.classList.contains("hidden")) {
    const passwordType = passwordSelect.value;
    if (!passwordType) return;
    
    // Store sub-issue
    conversationState.subIssue = passwordType;
    
    addMessage(passwordType, "user");
    
    // Get response object
    const responseObj = passwordSupport[passwordType];
    addMessage(responseObj.text, "bot");
    
    // Check if terminal
    if (responseObj.terminal) {
      sendToGoogleSheet(conversationState);
    }
    
    passwordSelect.classList.add("hidden");
    return;
  }

  // Handle software sub-menu
  if (!softwareSelect.classList.contains("hidden")) {
    const software = softwareSelect.value;
    if (!software) return;
    
    // Store sub-issue
    conversationState.subIssue = software;
    
    addMessage(software, "user");
    
    // Get response object
    const responseObj = softwareSupport[software];
    addMessage(responseObj.text, "bot");
    
    // Check if terminal
    if (responseObj.terminal) {
      sendToGoogleSheet(conversationState);
    }
    
    softwareSelect.classList.add("hidden");
    return;
  }

  // Handle primary issue selection
  if (!issueSelect.classList.contains("hidden")) {
    const issue = issueSelect.value;
    if (!issue) return;
    
    // Store primary issue
    conversationState.primaryIssue = issue;
    
    addMessage(issue, "user");
    
    // Get the response object
    const responseObj = responses[issue];
    addMessage(responseObj.text, "bot");
    
    // Check if this is terminal (end of conversation)
    if (responseObj.terminal) {
      // No more options! Submit now!
      sendToGoogleSheet(conversationState);
      issueSelect.classList.add("hidden");
    } else {
      // More options coming, show appropriate dropdown
      if (issue === "password") {
        passwordSelect.classList.remove("hidden");
        issueSelect.classList.add("hidden");
      } else if (issue === "software") {
        softwareSelect.classList.remove("hidden");
        issueSelect.classList.add("hidden");
      }
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
  
  // Reset conversation state
  resetConversationState();
  
  addMessage("Hello, please enter your full name:", "bot");
}

// Initialize chat on page load
addMessage("Hello, please enter your full name:", "bot");