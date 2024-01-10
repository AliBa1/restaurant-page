import { contentDiv } from "./setup";
const menuDiv = document.createElement('div');

const menuContent = () => {
    // menuDiv.classList.add("menu-content");
    contentDiv.appendChild(menuDiv);

    addMenuItem("Dynamite", 8.95, "shrimp tempura, avocado, cucumber, orange masago, spicy light mayo, sesame");
    addMenuItem("Miami", 11.95, "smoked salmon, avocado, orange masago, green onion, cream cheese, tempura, spicy light mayo, sesame, soy sheet");
    addMenuItem("Rainbow", 10.95, "tuna, salmon, avocado, green onion, cucumber, tempura, spicy light mayo, spicy sauce");
    addMenuItem("Salmon Kamikaze", 9.95, "salmon, kanikama, avocado, cucumber, green onion, tempura, spicy light mayo, spicy sauce, orange masago");
    addMenuItem("Spicy Salmon Crunch", 14.95, "salmon, cucumber, green onion, tempura, spicy sauce, spicy light mayo");
    addMenuItem("Spicy Shrimp", 7.95, "shrimp, kanikama, avocado, lettuce, green onion, tempura, spicy light mayo, spicy sauce, red tobiko, sesame");
}

const addMenuItem = (flavorName, price, description) => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');
    menuDiv.appendChild(menuItemDiv);

    let imgString = flavorName.toLowerCase().replace(/\s+/g, "-");
    const itemImg = document.createElement('img');
    itemImg.src = `../dist/images/${imgString}.png`;
    itemImg.alt = flavorName;
    menuItemDiv.appendChild(itemImg);

    
    // let flavorTitle = flavorName.charAt(0).toUpperCase() + flavorName.slice(1);
    const itemTitlePrice = document.createElement('h1');
    itemTitlePrice.textContent = `${flavorName} · $${price}`;
    menuItemDiv.appendChild(itemTitlePrice);

    const itemDesc = document.createElement('p');
    itemDesc.textContent = description;
    menuItemDiv.appendChild(itemDesc);
}

export { menuContent, menuDiv };