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