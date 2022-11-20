const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            input.parentElement.classList.add('error');
            inpName = input.parentElement.getAttribute('data-name');
            input.parentElement.setAttribute('data-error', `${inpName} cannot be empty`);
        } else {
            input.parentElement.classList.remove('error');
        }
    }
    );
    let email = inputs[2].value
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        inputs[2].parentElement.classList.add('error');
        inputs[2].parentElement.setAttribute('data-error', `Looks like this is not an email`);
    }
}
);