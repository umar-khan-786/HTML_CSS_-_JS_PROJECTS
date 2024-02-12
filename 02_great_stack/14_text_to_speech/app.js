const speech = new SpeechSynthesisUtterance();
let voices = [];
let voicesDropdown = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voicesDropdown.options[i] = new Option(voice.name, i))
  );
};
voicesDropdown.addEventListener("change", () => {
  speech.voice = voices[voicesDropdown.value];
});
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
