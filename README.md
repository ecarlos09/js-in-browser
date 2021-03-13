Hello!  Welcome to my attempt at using JavaScript in the browser, along with some DOM testing.

Below is an outline of what I will be attempting, along with some links to resources that I am using to help me.  Please visit the a separate USER_README for user instructions and the changelog.

Meanwhile, click the link below to visit the deployed website!

[![Netlify Status](https://api.netlify.com/api/v1/badges/3f1dda05-c84f-4771-b010-8928a5b13756/deploy-status)](https://app.netlify.com/sites/elwin-js-in-browser/deploys)

### Study Notes
| [JavaScript in the Browser](https://github.com/getfutureproof/fp_guides_wiki/wiki/JavaScript-in-the-Browser) | [Simple Dev Server](https://github.com/getfutureproof/fp_guides_wiki/wiki/Simple-Client-Side-Dev-Server) | [DOM Testing](https://github.com/getfutureproof/fp_guides_wiki/wiki/DOM-Testing) | [Jest Mocks](https://github.com/getfutureproof/fp_guides_wiki/wiki/Mocking-Functions-and-Modules-for-Testing-with-Jest) |

# Exercises
1. **Create a webpage that has**:
- A H1 tag
- A H2 tag
- A Header that contains a list of navigation items, styled to be horizontal across the top of the screen
- A section which contains three paragraphs, each paragraph should correspond to an item on your header

2. **Create the following events on your webpage**
- If a user clicks on the h1 tag,  the background should change colour, if they move their mouse out of the space the background should return to the original colour.
- If a user hovers over a h2 tag replace the words inside it to contain a greeting
- If someone types a letter whilst viewing the webpage a new paragraph should be created and that letter should be added to it.
- If someone clicks on one of the navigation items the styling of the connecting paragraph should change to be more bold and be a larger font size. If they click again on the same navigation item, the paragraph should revert to original styling.

3. **Testing**
- Take a look at the test suite in the demo code
- Try adding some Jest tests for the existing features in your webpage
- Add test(s) for a feature that you have not yet implemented - maybe an easter egg!
- Use your new test(s) to help you add the new feature