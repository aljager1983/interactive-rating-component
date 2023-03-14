
const submitbtn = document.getElementById("submitbtn");
const number = document.getElementById("numb");
const thankState = document.getElementById("thankstate");
const rate = document.getElementById("rate");
const selected = document.getElementById("selected");
const reload = document.getElementById("reload");
let i = 0;
let numbers = document.querySelectorAll(".num").length;


//numbers selection
for (var n=0; n<numbers; n++) {
    document.querySelectorAll(".num")[n].addEventListener("click", function() {
        let num = this.innerHTML;
        const numid = "num" + num;
        console.log(numid);
        const colornumid = document.getElementById(numid).getAttribute("class");
        console.log(colornumid);
    //     if(document.getElementById(numid).style.backgroundColor === "#252d37"){
    //         console.log("true");
    //         // document.getElementById(numid).style.backgroundColor = "grey";
    // } else {
    //     console.log("false")
    // }
        i++;
    })
}

//reload page, can be deleted later(added UX)
reload.addEventListener("click", function () {
    location.reload();
})

//submitbutton in Rating
submitbtn.addEventListener("click", function() {
    selected.innerHTML = "You selected " + i + " out of 5";
    thankState.style.display = "grid";
    rate.style.display = "none";
});

const clearConsole = () => {
    console.clear();
}

const clearConsoleTime = setTimeout(clearConsole, 2000);