function aboutLoad(){
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("aboutContainer");
    aboutContainer.style.backgroundColor = "rgba(255, 255, 255, .6) ";
    aboutContainer.style.height = "80vh";
    aboutContainer.style.border = "1px solid";

    const about = document.createElement("div");
    about.textContent = "In 1920, The Taco Line was born in the heart of Tucson, Arizona with the goal of bringing the taste of Tijuana straight from our grills to your stomach. Crafted from the finest and freshest ingredients, The Taco Line provides you with all of the exquisite and complex flavors that Tijuana has to offer. With our expansive menu of tacos, "
    about.style.fontWeight = "bold";
    about.style.fontSize = "36px";
    //about.style.height = "100%";

    aboutContainer.appendChild(about);
    return aboutContainer;
}

export default aboutLoad;