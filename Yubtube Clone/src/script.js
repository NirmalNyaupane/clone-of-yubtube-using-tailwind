const sideBar = document.querySelector(".side-bar");
const menuBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click",()=>{
    console.log("click");
    sideBar.classList.toggle("hide-list");
});