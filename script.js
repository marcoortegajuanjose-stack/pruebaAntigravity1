// Elementos del DOM
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
const btnReset = document.getElementById('btn-reset');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');

// Posibles resultados
const RESULTADOS = ['Has ganado', 'Has perdido'];

/**
 * Maneja la selección del usuario
 */
function handleChoice() {
  // Deshabilitar los botones para evitar múltiples clics
  btnRed.disabled = true;
  btnBlue.disabled = true;

  // Seleccionar aleatoriamente entre ganar o perder
  const indiceAleatorio = Math.floor(Math.random() * RESULTADOS.length);
  const resultado = RESULTADOS[indiceAleatorio];

  // Mostrar mensaje de resultado
  resultMessage.textContent = resultado;
  resultMessage.className = 'result-message';

  if (resultado === 'Has ganado') {
    resultMessage.classList.add('result-win');
  } else {
    resultMessage.classList.add('result-lose');
  }

  // Revelar contenedor de resultado y botón de reinicio
  resultContainer.classList.remove('hidden');
}

/**
 * Reinicia el juego al estado inicial
 */
function resetGame() {
  // Ocultar contenedor de resultado
  resultContainer.classList.add('hidden');
  resultMessage.textContent = '';
  resultMessage.className = 'result-message';

  // Habilitar los botones de elección
  btnRed.disabled = false;
  btnBlue.disabled = false;
}

// Event Listeners
btnRed.addEventListener('click', handleChoice);
btnBlue.addEventListener('click', handleChoice);
btnReset.addEventListener('click', resetGame);

