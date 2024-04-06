# Bulb ON OFF Task:
### Hosted Link: https: https://divyanshrajpoot9.github.io/Bulb_ON_OFF_Task/
### JavaScript DOM Manipulation:
The Document Object Model (DOM) is a programming interface for web documents. It provides a structured web page representation, allowing you to access and manipulate its elements and content using JavaScript. Here are some basic DOM properties and methods.
document: The document object represents the entire HTML document and serves as the entry point to the DOM. It provides properties and methods to access and modify the document's structure, content, and style.

### Element Selection and Traversal:

  ### getElementById(id): Retrieves an element by its unique id attribute.
  #### getElementsByClassName(className): Returns a collection of elements with a specific class name.
  ####  getElementsByTagName(tagName): Returns a collection of elements with a specific tag name.
  ####  querySelector(selector): Returns the first element that matches the CSS selector.
  ####  querySelectorAll(selector): Returns a list of all elements that match the CSS selector.

This HTML code creates a simple web page called "Copy Cat." Here's a breakdown of its structure and functionality:
This HTML code creates a simple web page called "Copy Cat." Here's a breakdown of its structure and functionality:

1. **HTML Structure**:
   - The `<!DOCTYPE html>` declaration defines the document type and HTML version being used.
   - The `<html>` element is the root element of the HTML document.
   - The `<head>` section contains meta-information about the document, such as character encoding, viewport settings, and the page title.
   - The `<body>` section contains the visible content of the web page.

2. **Page Elements**:
   - **Navbar**: It contains the title "Copy Cat Task" and has a light pink background with a blue-violet text colour.
   - **Middle Section**: This section occupies the main part of the page and is divided into two subsections:
   - **Input Section**: It contains an input field where users can enter text.
   - **Main Section**: It displays the entered text inside a box with a light goldenrod yellow background and red text colour. This section is initially empty but updates dynamically as the user types in the input field.
   - **Footer**: It displays the message "Made with Love By Divyansh Rajpoot" and has a light blue background with blue-violet text colour.

1. **HTML Structure:**
   - The HTML structure defines two sections of text, each enclosed within separate `<div>` elements with IDs "text1" and "text2".
   - These sections are initially displayed on the webpage.

2. **JavaScript:**
   - The JavaScript code targets these elements using the `document.getElementById()` method to get references to `text1_ref` and `text2_ref`.

3. **Event Handling:**
   - An event listener is attached to the button element with the id "bin". The `swipe_data()` function is executed when this button is clicked.

4. **Swapping Logic (`swipe_data()` function):**
   - Within the `swipe_data()` function:
     - The `inner Text` property is used to access the text content of the elements referenced by `text1_ref` and `text2_ref`.
     - The text content of `text1_ref` is stored in a temporary variable `box3`.
     - The text content of `text2_ref` is then replaced with the content of `text1_ref`.
     - Finally, the text content of `text1_ref` is updated with the content stored in `box3`, effectively swapping the text content between the two sections.

5. **User Interaction:**
   - When the user clicks the "Swipe the Data" button, the `swipe_data()` function is triggered, causing the text content of the two sections to swap.

6. **DOM Manipulation:**
   - The swapping of text content is achieved by manipulating the DOM elements directly using JavaScript, without reloading the webpage.
   - This manipulation is achieved by updating the `innerText` property of the DOM elements referenced by `text1_ref` and `text2_ref`.

In summary, this project demonstrates a simple but effective way to manipulate text content on a webpage using JavaScript and the DOM, providing an interactive user experience.

