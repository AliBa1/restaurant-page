// use 'npx webpack --watch' to run site
import { headerContent, showSection, locationContent } from './modules/setup';
import { homeContent } from './modules/home';
import { menuContent } from './modules/menu';
import { contactContent } from './modules/contact';

console.log("It's working");
headerContent();
homeContent();
menuContent();
contactContent();
showSection("home");
locationContent();
