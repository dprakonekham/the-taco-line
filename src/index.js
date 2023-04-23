import "./style.css";
import taco from "./assets/images/background-image.jpg"
import homeLoad from "./modules/home";
import menuLoad from "./modules/menu";
import aboutLoad from "./modules/about";

function component() {
  const container = document.createElement("div");
  container.classList.add("container");
  container.setAttribute("id","container");
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
  nav.style.height = "10vh";

  const home = document.createElement("button");
  home.textContent = "HOME";
  home.style.background = "none";
  home.style.color = "white";
  home.style.border = "none";
  home.style.fontSize = "24px";

  const menu = document.createElement("button");
  menu.textContent = "MENU";
  menu.style.background = "none";
  menu.style.color = "white";
  menu.style.border = "none";
  menu.style.fontSize = "24px";

  const about = document.createElement("button");
  about.textContent = "ABOUT";
  about.style.background = "none";  
  about.style.color = "white";
  about.style.border = "none";
  about.style.fontSize = "24px";

  const content = document.createElement("div");
  content.classList.add("content");
  content.setAttribute("id","content");
  const viewMenuButton = document.createElement("Button");
  viewMenuButton.style.backgroundColor = "green";
  viewMenuButton.textContent = "View Menu";
  viewMenuButton.addEventListener(`click`, function(e){
    while(content.firstChild){
      content.removeChild(content.lastChild)
    }
    content.appendChild(menuLoad());
  });
  content.appendChild(viewMenuButton);

  home.addEventListener(`click`, function(e){
    while(content.firstChild){
      content.removeChild(content.lastChild)
    }
    const viewMenuButton = document.createElement("Button");
    viewMenuButton.style.backgroundColor = "green";
    viewMenuButton.textContent = "View Menu";
    viewMenuButton.addEventListener(`click`, function(e){
      while(content.firstChild){
        content.removeChild(content.lastChild)
      }
      content.appendChild(menuLoad());
    });
    content.appendChild(viewMenuButton);
  });
  menu.addEventListener(`click`, function(e){
    while(content.firstChild){
      content.removeChild(content.lastChild)
    }
    content.appendChild(menuLoad());
  });
  about.addEventListener(`click`, function(e){
    while(content.firstChild){
      content.removeChild(content.lastChild)
    }
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