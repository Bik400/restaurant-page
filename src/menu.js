function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItem("./images/burger.jpg","Burger", 
    "8 oz. Angus beef patty, Cheddar cheese, Applewood smoked bacon"));
    
    const pizzaImage = menu.appendChild(createMenuItem("./images/pepperoni-pizza.jpg","Pizza",
    ["Parmesan", " Pizza Sauce", " Pepperoni", " Mozzarella"]));
    pizzaImage.setAttribute("id", "pizza-image");

    menu.appendChild(createMenuItem("./images/chickenstrips.jpg","Chicken Strips",
    "Four (4) chicken strips. Choice of BBQ sauce, buffalo, or ranch"));

    menu.appendChild(createMenuItem("./images/fish&chips.jpg","Fish and Chips",
    "Fried beer-battered cod, served with tartar sauce"));

    menu.appendChild(createMenuItem("./images/grilledcheese.jpg","Grilled Cheese",
    "Sharp cheddar, Swiss and Havarti on toasted sourdough"));

    const chickenWingsImage = menu.appendChild(createMenuItem("./images/chickenwings.jpg","Chicken Wings",
    "Served with celery and carrot sticks. Choice of buffalo or lemon pepper"));
    chickenWingsImage.setAttribute("id", "chicken-wings-image");

    return menu;
}

function createMenuItem(image, name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodImage = document.createElement("img");
    foodImage.src = image;

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;