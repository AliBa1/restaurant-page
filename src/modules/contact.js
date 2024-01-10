import { contentDiv } from "./setup";
const contactDiv = document.createElement('div');
const contactForm = document.createElement('form');
const emailPhoneFieldset = document.createElement('fieldset');
const socialsList = document.createElement('ul');

const contactContent = () => {
    contentDiv.appendChild(contactDiv);
    contactDiv.appendChild(contactForm);
    
    contactForm.action = '#';
    contactForm.method = 'get';

    createFormField("Name", "msg_name", "text", true, false, "", false);

    contactForm.appendChild(emailPhoneFieldset);
    createFormField("Email", "msg_email", "email", true, false, "", false);
    createFormField("Phone", "msg_phone", "tel", false, true, "[0-9]{3}-[0-9]{3}-[0-9]{4}", false);

    createFormField("Message", "msg_msg", "text", true, false, "", true);

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    contactForm.appendChild(submitButton);
    
    socialsList.classList.add('socials-list');
    contactDiv.appendChild(socialsList);

    const socialsTitle = document.createElement('li');
    socialsTitle.textContent = "Socials";
    socialsList.appendChild(socialsTitle);

    addSocial("instagram", "@sushishop");
    addSocial("youtube", "sushishopyt");
    addSocial("facebook", "@sushishopfb");
}

const createFormField = (label, fieldFor, type, isRequired, hasPattern, pattern, isTextarea) => {
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('form-field');
    if (type == "email" || type == "tel") {
        emailPhoneFieldset.appendChild(fieldDiv);
    } else {
        contactForm.appendChild(fieldDiv);
    }

    const fieldLabel = document.createElement('label');
    fieldLabel.textContent = label;
    fieldLabel.htmlFor = fieldFor;
    fieldDiv.appendChild(fieldLabel);

    if (isTextarea) {
        const fieldTextarea = document.createElement('textarea');
        fieldTextarea.rows = "4";
        fieldTextarea.cols = "50";
        fieldTextarea.name = fieldFor;
        fieldTextarea.id = fieldFor;
        fieldTextarea.required = isRequired;
        if (hasPattern) {
            fieldTextarea.pattern = pattern;
        }
        fieldDiv.appendChild(fieldTextarea);
    } else {
        const fieldInput = document.createElement('input');
        fieldInput.type = type;
        fieldInput.name = fieldFor;
        fieldInput.id = fieldFor;
        fieldInput.required = isRequired;
        if (hasPattern) {
            fieldInput.pattern = pattern;
        }
        fieldDiv.appendChild(fieldInput);
    }
}

const addSocial = (platform, username) => {
    const socialItem = document.createElement('li');
    socialsList.appendChild(socialItem);

    const socialItemImg = document.createElement('img');
    socialItemImg.src = `images/${platform}.svg`;
    socialItemImg.alt = platform;
    socialItem.appendChild(socialItemImg);

    const socialItemLink = document.createElement('a');
    socialItemLink.href = `https://www.${platform}.com`;
    socialItemLink.target = "_blank";
    socialItemLink.textContent = username;
    socialItem.appendChild(socialItemLink);
}


export { contactContent, contactDiv };