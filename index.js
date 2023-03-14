
const submitbtn = document.getElementById("submitbtn");
const number = document.getElementById("numb");
const thankState = document.getElementById("thankstate");
const rate = document.getElementById("rate");
const selected = document.getElementById("selected");
const reload = document.getElementById("reload");
let i = 0;

//select and deselect (increment and decrement)
let elements = document.querySelectorAll(".num");
for(element of elements){
   element.addEventListener("click", function(){
      if(!this.dataset.clicked){
         this.setAttribute("data-clicked", "true");
         this.style.backgroundColor = "#7c8798";
         i++;
      }else{
         this.removeAttribute("data-clicked");
         this.removeAttribute("style");
         i--;
      }
   });
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