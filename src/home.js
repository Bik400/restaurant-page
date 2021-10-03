function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
    
    const image = document.createElement("img");
    image.src = "./images/home-img.jpg";
    image.alt = "Beer";
    
    home.appendChild(createParagraph("The best beers and food"));
    home.appendChild(image);
    home.appendChild(createParagraph("Order online or visit us!"));
    

    return home;
}

function createParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;