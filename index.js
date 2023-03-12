//submit button
const submitbtn = document.getElementById("submitbtn");
const number = document.getElementById("num");
const thankState = document.getElementById("thankstate");
const rate = document.getElementById("rate");

submitbtn.addEventListener("click", function() {
    console.log("button is clicked");
    thankState.style.display = "grid";
    rate.style.display = "none";
})


number.addEventListener("click", function() {
    console.log("number is clicked");
})

