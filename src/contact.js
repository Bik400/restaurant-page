function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "☎️ 123 456 7890";

    const address = document.createElement("p");
    address.textContent = "📍 In a galaxy far far away";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);

    return contact
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";                          // erase the current content before showing contact info
    main.appendChild(createContact());
}

export default loadContact;