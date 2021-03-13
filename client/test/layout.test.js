//Import two built-in methods to bring in HTML file for testing
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

//Set up the tests
describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    test('it has a header with the word welcome in it', () => {
        let header = document.querySelector('header');
        expect(header.textContent).toContain('Welcome');
    })

    test('it has a footer with an image reference', () => {
        let footer = document.querySelector('footer');
        expect(footer.textContent).toContain('Image');
    })
})