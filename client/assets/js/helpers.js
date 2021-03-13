//Define original state
let original = true;
//Define selectors
let h1 = document.querySelector('h1');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let notH1 = document.getElementById('notH1');

function changeH1Background() {
    h1.style.backgroundColor = 'purple';
    h1.style.color = 'yellow';
    h1.textContent = 'Heading 1 is now in funky mode!';
    original = false;
};

function returnH1Background() {
    if(original===false) {
        h1.style.backgroundColor = 'white';
        h1.style.color = 'black';
        h1.textContent = 'Heading 1';
        original = true;
    }        
};

module.exports = { changeH1Background, returnH1Background };