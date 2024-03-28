let randomNumber;
let attempts;


function starNewGame(){
  
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("numeroUsuario").value = "";
  document.getElementById("message").innerHTML = "";
  document.getElementById("numeroUsuario").focus();
  
}

function checkGuess() {
   const guess = parseInt (document.getElementById("numeroUsuario").value);
   const message = document.getElementById("message");
   if (guess === randomNumber)
   {
     message.textContent = "Parabéns! Você acertou o número!";
     message.style.backgroundColor = "green";
     document.getElementById('guessField').disable = true;
   } else if (guess<randomNumber)
   { message.textContent = "Você errou! tente um número maior.";
     message.style.backgroundColor = "red";
   } else {
     message.textContent = "Você errou! tente um número menor.";
     message.style.backgroundColor = "red";
     
   }
     
}