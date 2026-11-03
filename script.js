// Elementos del DOM
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
const btnReset = document.getElementById('btn-reset');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const resultEmojis = document.getElementById('result-emojis');

// Posibles resultados con sus textos, clases y emojis
const RESULTADOS = [
  {
    mensaje: '¡Has acertado!',
    clase: 'result-win',
    emojis: '😄 😊 😁 🥳'
  },
  {
    mensaje: '¡Has perdido!',
    clase: 'result-lose',
    emojis: '😈 👿 👺 👹'
  }
];

/**
 * Maneja la selección del usuario
 */
function handleChoice() {
  // Deshabilitar los botones para evitar múltiples clics
  btnRed.disabled = true;
  btnBlue.disabled = true;

  // Seleccionar aleatoriamente entre ganar o perder
  const indiceAleatorio = Math.floor(Math.random() * RESULTADOS.length);
  const seleccion = RESULTADOS[indiceAleatorio];

  // Mostrar mensaje y emojis correspondientes
  resultMessage.textContent = seleccion.mensaje;
  resultMessage.className = `result-message ${seleccion.clase}`;
  resultEmojis.textContent = seleccion.emojis;

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
  resultEmojis.textContent = '';

  // Habilitar los botones de elección
  btnRed.disabled = false;
  btnBlue.disabled = false;
}

// Event Listeners
btnRed.addEventListener('click', handleChoice);
btnBlue.addEventListener('click', handleChoice);
btnReset.addEventListener('click', resetGame);

