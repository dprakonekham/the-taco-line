import "./style.css";
import taco from "./assets/images/background-image.jpg"
import homeLoad from "./modules/home";
import menuLoad from "./modules/menu";
import aboutLoad from "./modules/about";

function component() {
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.backgroundImage = 'url('+taco+')';
    container.style.backgroundSize = "cover";
    container.style.backgroundRepeat = "no-repeat";

    const nav = document.createElement("div");
    nav.style.display = "flex";
    nav.style.alignItems = "center";
    nav.style.justifyContent = "center";
    nav.style.gap = "20px";

    const home = document.createElement("button");
    home.textContent = "HOME";

    const menu = document.createElement("button");
    menu.textContent = "MENU";

    const about = document.createElement("button");
    about.textContent = "ABOUT";  

    const content = document.createElement("div");

    home.addEventListener(`click`, function(e){
    });
    menu.addEventListener(`click`, function(e){
      content.appendChild(menuLoad());
    });
    about.addEventListener(`click`, function(e){
      content.appendChild(aboutLoad());
    });

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
    container.appendChild(nav);
    container.appendChild(content);

    return container;
  }
  
document.body.appendChild(component());