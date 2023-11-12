const sentence = "The Medium is the Massage";

const typewriterContainer = document.getElementById('typewriter-text');

typewriterContainer.style.fontSize = "50px"; 
typewriterContainer.style.textAlign = "center";

function typeWriterEffect(index, text) {
  if (index < text.length) {
    typewriterContainer.innerHTML += text.charAt(index);
    index++;
    if (text == "essage"){
      setTimeout(() => typeWriterEffect(index, text), 400);
    }
    else{
    setTimeout(() => typeWriterEffect(index, text), 100);}
  } else if (text !== "essage") {
    setTimeout(() => deleteCharacterEffect(0,text), 10);
  }
}

function deleteCharacterEffect(index, text) {
  if (index < "Massage".length) {
    typewriterContainer.innerHTML = text.substring(0, text.length - index);
    index++;
    setTimeout(() => deleteCharacterEffect(index, text), 300);
  }
  else{
    setTimeout(() => typeWriterEffect(0, "essage"),50);
  }
}

typeWriterEffect(0, sentence);
