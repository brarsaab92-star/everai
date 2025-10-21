function showSection(id) { document.querySelectorAll('.section').forEach(s => s.style.display='none'); document.getElementById(id).style.display='block'; }

// Chatbot
function chat() {
  const input=document.getElementById('chatInput').value;
  const output=document.getElementById('chatOutput');
  const replies={hello:"Hi there! How can I help you?", hi:"Hey! Nice to meet you!", bye:"Goodbye!", name:"I'm your friendly AI bot."};
  let response="I'm not sure, but I’ll learn soon!";
  for(let key in replies){if(input.toLowerCase().includes(key)) response=replies[key];}
  output.textContent="You: "+input+"\nAI: "+response;
}

// Image Generator
function generateImage() {
  const prompt=document.getElementById('imgPrompt').value;
  document.getElementById('genImage').src=`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
}

// Voice Assistant
function startListening() {
  const recognition=new (window.SpeechRecognition||window.webkitSpeechRecognition)();
  recognition.lang="en-US";
  recognition.start();
  recognition.onresult=(event)=>{document.getElementById('voiceText').value=event.results[0][0].transcript;};
}
function speak() { const text=document.getElementById('voiceText').value; const msg=new SpeechSynthesisUtterance(text); window.speechSynthesis.speak(msg); }

// Content Writer
function writeContent() {
  const topic=document.getElementById('writeTopic').value;
  const output=document.getElementById('writeOutput');
  output.textContent=`Generating AI article on "${topic}"...\nHere’s a quick article about ${topic}.\nAI technology is changing how we live, work, and create. Stay curious!`;
}
