// import sections from other pages then use them for showSection
// show home section on first load
// 
import { homeDiv } from "./home";
import { menuDiv } from "./menu";
import { contactDiv } from "./contact";
const contentDiv = document.querySelector('#content');
const headerDiv = document.createElement('div');
const locationSectionDiv = document.createElement('div');
const locationsDiv = document.createElement('div');

const homeLink = document.createElement('a');
const menuLink = document.createElement('a');
const contactLink = document.createElement('a');

const addHeaderToContent = () => {
    headerDiv.classList.add('header');
    contentDiv.appendChild(headerDiv);
}

const addLocationsToContent = () => {
    locationSectionDiv.classList.add('location-section');
    contentDiv.appendChild(locationSectionDiv);
}

const headerContent = () => {
    addHeaderToContent();
    const logo = document.createElement('img');
    logo.src = "images/svg-logo.svg";
    logo.alt = "Logo";
    logo.classList.add("header-logo");
    headerDiv.appendChild(logo);

    const pageSectionsDiv = document.createElement('div');
    pageSectionsDiv.classList.add("page-sections");
    headerDiv.appendChild(pageSectionsDiv);

    homeLink.href = "#";
    homeLink.textContent = "Home";
    homeLink.onclick = () => { showSection('home') };
    homeLink.classList.add("page-header");
    pageSectionsDiv.appendChild(homeLink);

    menuLink.href = "#";
    menuLink.textContent = "Menu";
    menuLink.onclick = () => { showSection('menu') };
    menuLink.classList.add("page-header");
    pageSectionsDiv.appendChild(menuLink);

    contactLink.href = "#";
    contactLink.textContent = "Contact";
    contactLink.onclick = () => { showSection('contact') };
    contactLink.classList.add("page-header");
    pageSectionsDiv.appendChild(contactLink);


    const orderButton = document.createElement('button');
    orderButton.textContent = "ORDER";
    orderButton.classList.add('order-button');
    headerDiv.appendChild(orderButton);
}

const showSection = (section) => {
    homeLink.style.textDecoration = "none";
    menuLink.style.textDecoration = "none";
    contactLink.style.textDecoration = "none";

    homeDiv.classList.add("hide-content");
    menuDiv.classList.add("hide-content");
    menuDiv.classList.remove("menu-content");
    contactDiv.classList.add("hide-content");
    contactDiv.classList.remove("contact-content");
    
    switch(section) {
        case "home":
            homeLink.style.textDecoration = "underline";

            homeDiv.classList.remove("hide-content");
            homeDiv.classList.add("home-content");
            break;
        case "menu":
            menuLink.style.textDecoration = "underline";

            menuDiv.classList.remove("hide-content");
            menuDiv.classList.add("menu-content");
            break;
        case "contact":
            contactLink.style.textDecoration = "underline";

            contactDiv.classList.remove("hide-content");
            contactDiv.classList.add("contact-content");
            break;
    }
}

const locationContent = () => {
    addLocationsToContent();
    const locationsTitle = document.createElement('p');
    locationsTitle.textContent = "Locations";
    locationSectionDiv.appendChild(locationsTitle);

    locationsDiv.classList.add("locations");
    locationSectionDiv.appendChild(locationsDiv);
    
    addLocation("123 Parkway Ave", 
                "Los Angeles, California, 12345", 
                ["Mon-Fri: 10am - 11pm", 
                "Sat: 10am - 12am",
                "Sun: 9am - 7pm"],
                "123-456-7890");

    addLocation("789 Amythest Drive", 
                "Brooklyn, New York, 12345", 
                ["Mon-Fri: 7am - 10pm", 
                "Sat: 7am - 12am",
                "Sun: 10am - 9pm"],
                "123-456-7890");

    addLocation("456 East St", 
                "Chicago, Illinois, 12345", 
                ["Mon-Fri: 8am - 11pm", 
                "Weekend: 6am - 12am"],
                "123-456-7890");
}

const addLocation = (address, cityStateZip, hours, phoneNum) => {
    const locationDiv = document.createElement('div');
    locationDiv.classList.add("location");
    locationsDiv.appendChild(locationDiv);

    const addressP = document.createElement('p');
    addressP.classList.add("address");
    addressP.textContent = address;
    locationDiv.appendChild(addressP);

    const cityStateP = document.createElement('p');
    cityStateP.classList.add("city-state");
    cityStateP.textContent = cityStateZip;
    locationDiv.appendChild(cityStateP);

    const hoursList = document.createElement('ul');
    locationDiv.appendChild(hoursList);

    const hoursTitle = document.createElement('li');
    hoursTitle.classList.add("hours-title");
    hoursList.appendChild(hoursTitle);
    hours.forEach(day => {
        const hourElement = document.createElement('li');
        hourElement.textContent = day;
        hoursList.appendChild(hourElement);
    });

    const phoneNumberDiv = document.createElement('div');
    phoneNumberDiv.classList.add("phone-number");
    locationDiv.appendChild(phoneNumberDiv);

    const phoneImg = document.createElement('img');
    phoneImg.src = "images/phone.svg";
    phoneImg.alt = "Phone";
    phoneImg.classList.add("phone-number-img");
    phoneNumberDiv.appendChild(phoneImg);

    const phoneNumP = document.createElement('p');
    phoneNumP.textContent = phoneNum;
    phoneNumberDiv.appendChild(phoneNumP);
}


export { headerContent, showSection, locationContent, contentDiv };
