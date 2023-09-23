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