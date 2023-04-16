function homeLoad(){
    const homeContainer = document.createElement("div");
    const viewMenuButton = document.createElement("Button");
    viewMenuButton.textContent = "View Menu";
    homeContainer.appendChild(viewMenuButton);
    return homeContainer;
}

export default homeLoad;