// alert when button with id v2 is pressed
//function() approch
const btn1 = document.querySelector("#v1");
btn1.onclick = function () {
    alert("Button pressed with function");
}

//by arrow function
const btn2 = document.querySelector("#v2");
btn2.onclick = () => {
    alert("Button pressed with arrow");
}

//usind addEventListener
const btn3 = document.querySelector("#v3");
btn3.addEventListener("dblclick", () => {
    alert("Button pressed with addEventlistner");
})

