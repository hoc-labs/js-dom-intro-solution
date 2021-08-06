# JavaScript DOM Intro

The purpose of this lab is to introduce you to the DOM and how you can access it through JavaScript. You will be adding code to change the background color of the document based on input from the user.

### Setup
* Open the project folder in VS Code.
* Load the index.html document in the editor.

### Adding JavaScript 
JavaScript scripts can be included directly within the HTML document using the &lt;script&gt; element and placing the JavaScript code between the opening and closing tags.

**Embedded in HTML**


```markup
<body>
  <script>
    console.log("Hello");
  </script>
</body>
```

But the preferred method is to load the script from an external file, by specifying the location of the file with the src attribute.

**External File**

```javascript
/* script.js */

console.log("Hello");
```

```markup
<html lang="en">
<head>
</head>
<body>
  <!-- all other html first -->
  <script src="script.js"></script>
</body>
</html>

```

**Note:** For the purposes of showing the screen captures for this lab, the script is embedded in the HTML document. For your code, you should create an external file and include it in the HTML document.
#### console object

The console object (window.console) is available to JavaScript code and provides methods for logging content to the console.

```javascript
console.log("Hello");
```

![](https://raw.githubusercontent.com/hoc-labs/images/main/console-log.png)

![](https://raw.githubusercontent.com/hoc-labs/images/main/console-hello.png)


#### document object

If you open Chrome Dev Tools/Console and type document you will get an object that represents the HTML document.

![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-document.png)

The  document object is available to JavaScript code and is the entry into the DOM, which is the API that allows us to manipulate the HTML elements in the document.

### object properties

The statement below is setting the value of the backgroundColor property on the body element. Each dot in the statement is accessing an object contained within the parent object.


**JavaScript**

```javascript
document.body.style.backgroundColor = "red";
```

Here is the corresponding **CSS** format:
```css

body {
  background-color: red;
}
```
Note the style properties use camel-case, instead of the dash-case, because dashes are not allowed in JavaScript property names.

After the statement has been executed, the HTML document will be updated to change the background-color of the body element.

![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-document-2.png)

### window object

Type the word window in the Console window and expand the object. You will see the the properties and methods of the window object displayed.

As we learned earlier, the document and console objects, as well as the alert and confirm methods are actually not a global, but  properties of the window object. But, all properties/methods of the global window object can be accessed directly.

![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-window-1.png)


```markup
/* this */
window.alert("Hello");

/* is the same as this */
alert("Hello");
```

### window.alert method

The statement is calling the alert method on the window object in order to display a message window to the user.

```markup
<body>
    <script>
        window.alert("Hello");
    </script>
</body>
```
![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-alert-1.png)


**alert(message)** - shows a message to the user and waits for the user to click Ok.

![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-alert-2.png)


### window.prompt method

**prompt(message, default value)** - shows a modal dialog with a message and a input field for the user to enter a value and waits for the user to click Ok or Cancel. The second parameter is optional, and will be used as the default value if it is supplied. The function will return the value the user entered.

The script below is calling the prompt method on the window object to ask the user what color to change the background color to.

The prompt method returns a value entered by the user. In order to store the return value we need to create a variable to hold the return value.

```javascript
const color = window.prompt("What color should I set the background to?", "yellow");
```

![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-prompt-1.png)


![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-prompt-2.png)


Use the value stored in the color variable to set the value of the body element's background color.

```javascript
const color = window.prompt("What color should I set the background to?", "yellow");
document.body.style.backgroundColor = color;
```

### Concatenating Strings

Modify the above script to use the window.alert method to display the value of the background color after it has been changed.

The "+" character can be used to concatenate strings to form a larger string.

```javascript
let color = window.prompt("What color should I set the background to?", "yellow");
document.body.style.backgroundColor = color;
window.alert("The color is: " + color);
```

![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-prompt-3.png)


Modify the script above to display the color before and after the change.

```javascript
let colorBefore = document.body.style.backgroundColor;
let color = window.prompt("What color should I set the background to?", colorBefore);
document.body.style.backgroundColor = color;
window.alert("The color has been changed from " + colorBefore + " to " + color);
```

### window.confirm method

![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-confirm-1.png)

**confirm(message)** - shows a modal dialog with a message and waits for the user to click Ok or Cancel. The function will return true if the user clicks Ok, and false if the user clicks Cancel.

In the script below, on line 3, we've added a call to the window.confirm method to ask whether the user wants to change the background color. But we're not doing anything with the return value. We're not using the answer to decide whether to change the color.

```javascript
let colorBefore = document.body.style.backgroundColor;
let answer = window.confirm("Do you want to change the background color?");
let color = window.prompt("What color should I set the background to?", colorBefore);
document.body.style.backgroundColor = color;
window.alert("The color is: " + color);
```
**Add a conditional statement**

Change your code to add a conditional statement to check whether the confirm method returned true, and if so, then continue on the code path to prompt the user for the color and change the background color.

```javascript
let colorBefore = document.body.style.backgroundColor;
let answer = window.confirm("Do you want to change the background color?");
if (answer===true) {
  let color = window.prompt("What color should I set the background to?", colorBefore);
  document.body.style.backgroundColor = color;
  window.alert("The color is: " + color);
}
```

**Change the color back if they don't like it**
Next, we want to confirm with the user that they like the new background color. If he responds with a no (clicks the Cancel button), then set the background color back to the previous color.


```javascript
let colorBefore = document.body.style.backgroundColor;
let answer = window.confirm("Do you want to change the background color?");
if (answer===true) {
  let color = window.prompt("What color should I set the background to?", colorBefore);
  document.body.style.backgroundColor = color;
  window.alert("The color is: " + color);

  answer = window.confirm("Should I keep this color?");
  if (answer===false) {
    document.body.style.backgroundColor = colorBefore;
  }
}
```
<br/>

**JavaScript Event Processing**

This code presents an aspect of web programming that we haven't discussed yet.  If we run the code below, you will see the alert that says "The color is red" come up, but the background color will not have been updated yet.

![](https://raw.githubusercontent.com/hoc-labs/images/main/dom-alert-3.png)

This is because the web browser event loop that is checking the DOM for changes that require a repaint of the screen hasn't had a chance to run before the  confirm instruction suspends all code from executing. 


There is a way to work around this issue. The window.setTimeout method allows you to schedule some code to be executed at some point in the future (in our case just two seconds). Using window.setTimeout, we can defer the code that will ask whether the user likes the new background color until after the browser has had a chance to update the screen to reflect the new color.

```javascript
let colorBefore = document.body.style.backgroundColor;
let answer = window.confirm("Do you want to change the background color?");
if (answer===true) {
  let color = window.prompt("What color should I set the background to?", colorBefore);
  document.body.style.backgroundColor = color;
  window.alert("The color is: " + color);

  answer = window.confirm("Should I keep this color?");
  if (answer===false) {
    document.body.style.backgroundColor = colorBefore;
  
    // run the function passed to setTimeout in two seconds
    window.setTimeout(()=> {

      answer = window.confirm("Should I keep this color?");
      if (answer===false) {
        document.body.style.backgroundColor = colorBefore;
      }
    }
    
    , 2000)
  }
}

```



