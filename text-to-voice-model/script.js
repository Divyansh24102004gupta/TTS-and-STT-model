// Modal Elements
const modal = document.getElementById("textToSpeechModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close-btn");
const speakTextBtn = document.getElementById("speakTextBtn");
const textInput = document.getElementById("textInput");

// Show Modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Hide Modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Text to Speech Functionality
speakTextBtn.addEventListener("click", () => {
  const text = textInput.value.trim();

  if (text !== "") {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Set voice options (optional)
    utterance.lang = "en-US";
    utterance.rate = 1; // Speed of speech
    utterance.pitch = 1; // Pitch of voice

    // Speak the text
    speechSynthesis.speak(utterance);
  } else {
    alert("Please enter some text.");
  }
});
