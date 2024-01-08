// import sections from other pages then use them for showSection
// show home section on first load
// 
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
    logo.src = "../src/images/svg-logo.svg";
    logo.alt = "Logo";
    logo.classList.add("header-logo");
    headerDiv.appendChild(logo);

    const pageSectionsDiv = document.createElement('div');
    pageSectionsDiv.classList.add("page-sections");
    headerDiv.appendChild(pageSectionsDiv);

    homeLink.href = "#";
    homeLink.textContent = "Home";
    homeLink.onclick = showSection('home');
    homeLink.classList.add("unselected-page-section");
    pageSectionsDiv.appendChild(homeLink);

    menuLink.href = "#";
    menuLink.textContent = "Menu";
    menuLink.onclick = showSection('menu');
    menuLink.classList.add("unselected-page-section");
    pageSectionsDiv.appendChild(menuLink);

    contactLink.href = "#";
    contactLink.textContent = "Contact";
    contactLink.onclick = showSection('contact');
    contactLink.classList.add("unselected-page-section");
    pageSectionsDiv.appendChild(contactLink);


    const orderButton = document.createElement('button');
    orderButton.textContent = "ORDER";
    orderButton.classList.add('order-button');
    headerDiv.appendChild(orderButton);
}

const showSection = (section) => {
    homeLink.classList.add("unselected-page-section");
    menuLink.classList.add("unselected-page-section");
    contactLink.classList.add("unselected-page-section");

    // homeSection.classList.add("hide-content");
    // menuSection.classList.add("hide-content");
    // contactSection.classList.add("hide-content");
    
    switch(section) {
        case "home":
            // homeLink.classList.remove("unselected-page-section");
            // homeLink.classList.add("selected-page-section");

            // homeSection.classList.remove("hide-content");
            // homeSection.classList.add("home-content");
            break;
        case "menu":
            // menuLink.classList.remove("unselected-page-section");
            // menuLink.classList.add("selected-page-section");

            // menuSection.classList.remove("hide-content");
            // menuSection.classList.add("menu-content");
            break;
        case "contact":
            // contactLink.classList.remove("unselected-page-section");
            // contactLink.classList.add("selected-page-section");

            // contactSection.classList.remove("hide-content");
            // contactSection.classList.add("contact-content");
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
    phoneImg.src = "../src/images/phone.svg";
    phoneImg.alt = "Phone";
    phoneImg.classList.add("phone-number-img");
    phoneNumberDiv.appendChild(phoneImg);

    const phoneNumP = document.createElement('p');
    phoneNumP.textContent = phoneNum;
    phoneNumberDiv.appendChild(phoneNumP);
}


export { headerContent, locationContent };
