// use 'npx webpack --watch' to run site
import { headerContent, showSection, locationContent } from './setup';
import { homeContent } from './home';

console.log("It's working");
headerContent();
homeContent();
showSection("home");
locationContent();
