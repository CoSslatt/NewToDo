const userContent = document.querySelector('#user-content');

let currentInput;
let previousInput;
let inputExists = false;

window.addEventListener('click', e => {

    if (e.target.innerText != 'add') return;
    if (inputExists){inputAlreadyExists(); return;}

    const input = document.createElement('input');
    const newInput = userContent.appendChild(input);
    newInput.classList.add('task-input');

    currentInput = newInput;
    inputExists = true;
});

window.addEventListener('keypress', e => {
    if (e.key != 'Enter') return;

    typeTask(currentInput);
});

function typeTask (input) {
    userContent.removeChild(input);

    const div = document.createElement('div');

    const newDiv = userContent.appendChild(div);
    newDiv.classList.add('task');
    newDiv.innerText = input.value;

    inputExists = false;
};

function inputAlreadyExists() {
    currentInput.style.boxShadow = "0 0 10px red";
    currentInput.style.border = "1px solid red";
};
