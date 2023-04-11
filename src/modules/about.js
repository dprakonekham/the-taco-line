function aboutLoad(){
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("aboutContainer");
    const about = document.createElement("P");
    about.textContent = "In 1920, The Taco Line was born in the heart of Tucson, Arizona with the goal of bringing the taste of Tijuana straight from our grills to your stomach. Crafted from the finest and freshest ingredients, you will taste the exquisite and complex flavors Tijuana has to offer and experience the tacos that the president has been raving about."
    aboutContainer.appendChild(about);
    return aboutContainer;
}

export default aboutLoad;