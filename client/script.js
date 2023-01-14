import bot from './assets/bog.svg';
import user from './assets/user.svg';

const form = document.querySelector('from');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300)

}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if(index < text.length) {
      element.innerHTML += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  retrurn `id-${timestamp}-${hexadecimalString}`;
}

function chartStripe (isAi, value, uniqueId) {
  return (
    `
    <div class='wrapper ${isAi && 'ai'}'>
      <div
    </div>
    `
  )
}