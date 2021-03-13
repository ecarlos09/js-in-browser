(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
console.log('Yay, you found my JavaScript!  \nPrepare yourself for some magic ...');

//Import helper functions
const helpers = require('./helpers');

function initBindings() {
    //Bind h1, header, footer and notH1 to event listeners and activate functions when clicked
    let h1 = document.querySelector('h1')
    h1.addEventListener('click', helpers.changeH1Background);
    let header = document.querySelector('header');
    header.addEventListener('mouseover', helpers.returnH1Background);
    let footer = document.querySelector('footer');
    footer.addEventListener('mouseover', helpers.returnH1Background);
    let notH1 = document.getElementById('notH1');
    notH1.addEventListener('mouseover', helpers.returnH1Background);
}

initBindings();
},{"./helpers":1}]},{},[2]);
