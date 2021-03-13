//Import helper functions
const helpers = require('../assets/js/script');

describe ('test the helper functions!', () => {
    describe ('h1 helpers', () => {
        let h1;
        beforeEach(() => {
            //innerHTML stuff
        })

        test('h1 changes background on mouseover', () => {
            helpers.changeh1Background();
            expect(h1.style.backgroundColor).not.toBe('white');
        });

        test('h1 background returns to original colour', () => {
            helpers.returnh1Background();
            expect(h1.style.backgroundColor).toBe('white');
        })
    })
});