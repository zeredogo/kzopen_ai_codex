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
      <div class='chat'>
       <div className='profile'>
        <img 
         src='${isAi ? bot : user}'
         alt='${isAi ? 'bot' : 'user'}'
        />
       </div>
       <div class='message' id=${uniqueId}>${value}</div>
      </div>
    </div>
    `
  )
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  
  //user's chatstripe
  chatContainer.innerHTML += chartStripe(false, data.get('prompt')); 
  
  form.reset(); 

  // bot's chatstripe
  const uniqueId =generateUniqueId();
  chatContainer.innerHTML += chartStripe(true, " ", uniqueId);

  chatContainer.scrollTop = chatContainer.scrollHeight;

  const messageDiv = document.getElementById(uniqueId);

  loader(messageDiv);
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }
})