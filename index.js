//submit button
const submitbtn = document.getElementById("submitbtn");
const number = document.getElementById("numb");
// const num = document.getElementsByClassName("num");
const thankState = document.getElementById("thankstate");
const rate = document.getElementById("rate");
const selected = document.getElementById("selected");
const reload = document.getElementById("reload");
let i = 0;
// let colorGrey = new Color ()
let numbers = document.querySelectorAll(".num").length;

for (var n=0; n<numbers; n++) {
    document.querySelectorAll(".num")[n].addEventListener("click", function() {
        let num = this.innerHTML;
        const numid = "num" + num;
        console.log(numid);
        document.getElementById(numid).style.backgroundColor = "grey";
        i++;
    })
}
//reload page, can be deleted later

reload.addEventListener("click", function () {
    location.reload();
})

submitbtn.addEventListener("click", function() {
    selected.innerHTML = "You selected " + i + " out of 5";
    thankState.style.display = "grid";
    rate.style.display = "none";
});