import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
import ExitCafe from "./exit"
import "./style.css";

loadHome();  


document.getElementById("home-btn").addEventListener("click", () => {
    loadHome();
});

document.getElementById("menu-btn").addEventListener("click", () => {
    loadMenu();
});

document.getElementById("about-btn").addEventListener("click", () => {
    loadAbout();
});

document.getElementById("exit-btn").addEventListener("click", () => {
   ExitCafe();
});
console.log("WEBPACK WORKING");