const userContent = document.querySelector('#user-content');

const addButton = document.querySelector('#add-icon');

let currentInput;
let previousInput;
let inputExists = false;

addButton.addEventListener('click', e => {
    if (currentInput != null) currentInput.classList.remove('input-already-exists');

    if (e.target.innerText != 'add') return;
    if (inputExists){
        currentInput.classList.add('input-already-exists'); return;
    }

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
