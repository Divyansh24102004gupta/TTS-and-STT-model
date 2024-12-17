// Modal Elements
const modal = document.getElementById("voiceModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close-btn");
const startRecordingBtn = document.getElementById("startRecordingBtn");
const outputText = document.getElementById("outputText");

// Show Modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Hide Modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Voice Input Using Web Speech API
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false; // Only final results
  recognition.maxAlternatives = 1;

  // Start Speech Recognition
  startRecordingBtn.addEventListener("click", () => {
    outputText.textContent = "Listening...";
    recognition.start();
  });

  // On Speech Result
  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript;
    outputText.textContent = `You said: "${transcript}"`;
  });

  // On Speech End
  recognition.addEventListener("end", () => {
    recognition.stop();
  });

  // Error Handling
  recognition.addEventListener("error", (event) => {
    outputText.textContent = `Error: ${event.error}`;
  });
} else {
  alert("Speech Recognition API is not supported in this browser.");
}
