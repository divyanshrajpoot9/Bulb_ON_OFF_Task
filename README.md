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

1. **Element References**: 
    - `image_ref` is a variable that holds a reference to an image element in the HTML document. This element is identified by the ID attribute 'img_id'.
    - `btn_ref` is a variable that holds a reference to a button element in the HTML document. This element is identified by the ID attribute 'btn'.

2. **Function Definition**:
    - `switch_me()` is a function declared in JavaScript. This function will be called whenever an event triggers it, such as clicking on a button.

3. **Function Implementation**:
    - Inside the `switch_me()` function:
        - An if-else statement checks the text content of the button referenced by `btn_ref`.
        - If the button's text content is 'Switch On', the code block inside the `if` statement is executed.
        - If the button's text content is not 'Switch On', the code block inside the `else` statement is executed.

4. **If Block**:
    - Inside the `if` block:
        - The source (`src`) attribute of the image referenced by `image_ref` is set to 'bulb_on.jpg'. This changes the image displayed to a bulb turned on.
        - The text content of the button referenced by `btn_ref` is set to 'Switch Off'. This changes the button text to indicate that clicking it will switch the bulb off.

5. **Else Block**:
    - Inside the `else` block:
        - The source (`src`) attribute of the image referenced by `image_ref` is set to 'bulb_off.jpg'. This changes the image displayed to a bulb turned off.
        - The text content of the button referenced by `btn_ref` is set to 'Switch On'. This changes the button text to indicate that clicking it will switch the   bulb on.

6. **Conclusion**:
    - The code toggles the image displayed between a bulb turned on and turned off each time the button is clicked. It also toggles the text content of the button to reflect the current state of the bulb (on or off).
    - 
![image](https://github.com/divyanshrajpoot9/Bulb_ON_OFF_Task/assets/114856467/ce04147a-ef0b-46ad-a092-c5c467a0ed7f)
