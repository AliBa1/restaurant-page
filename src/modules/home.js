import {contentDiv} from './setup';
const homeDiv = document.createElement('div');

const homeContent = () => {
    contentDiv.appendChild(homeDiv);

    const homeHeader = document.createElement("p");
    homeHeader.textContent = "Best Sushi in Town";
    homeHeader.classList.add("home-title");
    homeDiv.appendChild(homeHeader);
    
    const homeSubtitle = document.createElement("p");
    homeSubtitle.textContent = "Order online or in-person";
    homeSubtitle.classList.add("home-subtitle");
    homeDiv.appendChild(homeSubtitle);
}

export { homeContent, homeDiv };