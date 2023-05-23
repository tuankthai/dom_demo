const h1 = document.querySelector("h1")
const button = document.querySelector("#shifter")  //id needs #, class needs '.'


console.log({ h1 })
console.log({button})

let clicked  = false

button.addEventListener("click", () => {
    console.log("I am clicked")
    // if (!clicked) {
    //     clicked = true;
    //     h1.textContent = "good bye world"
    // } else {
    //     clicked = false;
    //     h1.textContent = "hello world"
    // }
    clicked = !clicked
    h1.textContent = clicked?   "good bye world"  : "hello world"
})