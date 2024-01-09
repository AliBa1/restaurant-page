// use 'npx webpack --watch' to run site
import { headerContent, showSection, locationContent } from './setup';
import { homeContent } from './home';
import { menuContent } from './menu';
import { contactContent } from './contact';

console.log("It's working");
headerContent();
homeContent();
menuContent();
contactContent();
showSection("contact");
locationContent();
