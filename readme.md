# Decimal points conversions

- we can provide values and it will convert it hexa-decimal, binary numbers and octal numbers
- cannot accepts string and trough error that the string value is not accepted

# Files

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaPractice</title>
  </head>
  <link rel="stylesheet" href="./style.css" />

  <body>
    <div class="section">
      <h1>converstion of decimal into any number</h1>
      <div class="main">
        Pl enter number: <input type="text" id="input" /><br />
        <select id="option">
          <option value="2">Binary</option>
          <option value="8">octal</option>
          <option value="16">Haxa_decimal</option></select
        ><br />
        <button id="btn">Proceed Now</button><br />
        <span id="result"></span>
      </div>
    </div>
    <!-- ----------Javascript file is attached------- -->
    <script src="./index.js"></script>
  </body>
</html>
```

## CSS

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: center;
}

.section {
  margin: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 25px;
  background-color: beige;
  height: 500px;
  border-radius: 10px;
}

h1 {
  margin: 20px 10px;
  text-transform: uppercase;
}

.main {
  font-size: large;
  flex-direction: column;
}

input {
  border: none;
  outline: none;
  padding: 10px;
  color: green;
  margin: 0px 10px;
  border-radius: 5px;
  font-size: large;
}

#option {
  border: none;
  outline: none;
  padding: 10px;
  color: rgb(218, 218, 218);
  background-color: rgb(27, 27, 27);
  margin: 20px 0px;
  width: 365px;
  font-size: large;
}

#result {
  margin: 10px 0px;
  text-transform: uppercase;
  font-size: 20px;
}

button {
  padding: 10px;
  border: 2 px solid green;
  margin: 10px 0px;
  outline: none;
  width: 365px;
}
```

## JAVASCRIPT

```js
//----------------Selected elemnts by using javascript-----------------
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let option = document.getElementById("option");

btn.addEventListener("click", function () {
  let num = +input.value;
  let opt = +option.value;

  if (isNaN(num)) {
    result.textContent = "The given value is incorect".toUpperCase();
    result.style.color = "red";
    result.style.fontWeight = "500";
    console.log(result);
  } else {
    let z = num.toString(opt);
    result.textContent = z;
  }
});
```
