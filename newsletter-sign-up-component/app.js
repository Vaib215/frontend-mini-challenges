const container = document.querySelector('.container')
const form = document.querySelector('form')
const input = document.querySelector('input')
const dismiss = document.querySelector('.success-message button')

const validateEmail = (e) => {
  e.preventDefault()
  if (!input.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    input.parentElement.className = 'input-wrapper error'
  } else{
    input.parentElement.className = 'input-wrapper'
    container.classList.add('success')
  }
}

const dismissMessage = () => {
  container.classList.remove('success')
}

dismiss.addEventListener('click', dismissMessage)
form.addEventListener('submit', validateEmail)