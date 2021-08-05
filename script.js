
// let color = window.prompt("What color should I set the background to?", "yellow");
// document.body.style.backgroundColor = color;
// window.alert("The color is: " + color);

// let colorBefore = document.body.style.backgroundColor;
// let answer = window.confirm("Do you want to change the background color?");
// let color = window.prompt("What color should I set the background to?", colorBefore);
// document.body.style.backgroundColor = color;
// window.alert("The color is: " + color);

// let answer = window.confirm("Do you want to change the background color?");
// if (answer === true) {
//   let color = window.prompt("What color should I set the background to?", colorBefore);
//   document.body.style.backgroundColor = color;
//   window.alert("The color is: " + color);
// }

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

