//Import two built-in methods to bring in HTML file for testing
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

//Set up the tests
describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    let h1 = document.querySelector('h1');
    let h2 = document.querySelector('h2');
    let header = document.querySelector('h2');
    let nav = document.querySelector('nav');
    let section = document.querySelector('section');
    let paragraphs = document.querySelectorAll('p');
    let footer = document.querySelector('footer');

    describe('h1 tag', () => {
        test('it has an h1 tag', () => {
            expect(h1).toBeTruthy();
        })
    });

    describe('h2 tag', () => {
        test('it has an h2 tag', () => {
            expect(h2).toBeTruthy();
        })
    });

    describe('header', () => {
        test('it has a header', () => {
            expect(header).toBeTruthy();
        })
        // test('header has nav bar', () => {
        //     //Code here
        // })
        // test('nav bar items are styled horizontally', () => {
        //     //Code here
        // })
        // test('nav bar is positioned at top of screen', () => {
        //     //Code here
        // })
    });

    describe('paragraph section', () => {
    //     test('section contains three paragraphs', () => {
    //         //Code here
    //     })
    //     test('each paragraph corresponds to item on nav bar')
    });

    describe('footer', () => {
        test('it has a footer with an image reference', () => {
            expect(footer.textContent).toContain('Image');
        })
    });
});