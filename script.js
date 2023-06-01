let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
let tentativasRestantes = 5;

while (tentativasRestantes > 0) {
  let chute = prompt(`Tente adivinhar o número entre 1 e 1000. Você ainda tem ${tentativasRestantes} tentativas.`);
  
  if (chute == numeroAleatorio) {
    alert(`Você acertou o número em ${6 - tentativasRestantes} tentativas! Parabéns!`);
    break;
  } else if (chute < numeroAleatorio) {
    alert("O número secreto é maior, tente um número maior que o chute atual.");
  } else {
    alert("O número secreto é menor, tente um número menor que seu chute atual.");
  }
  
  tentativasRestantes--;
}

if (tentativasRestantes === 0) {
  alert(`Xii, não foi desta vez. O número correto era ${numeroAleatorio}.`);
}



