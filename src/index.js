import "./style.css";
import taco from "./assets/images/background-image.jpg"

function component() {
    const content = document.createElement('div');
    content.style.display = "grid";
    content.style.backgroundImage = 'url('+taco+')';
    content.style.backgroundSize = "contain";
    content.style.backgroundRepeat = "no-repeat";
    content.classList.add('content');

    const nav = document.createElement('div');

    const home = document.createElement('div');
    home.textContent = "HOME";

    const menu = document.createElement('div');
    menu.textContent = "MENU";

    const about = document.createElement('div');
    about.textContent = "ABOUT";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
    content.appendChild(nav);

    return content;
  }
  
document.body.appendChild(component());