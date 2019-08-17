import 'normalize.css/normalize.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/styles.scss';
import KittenImage from '../img/kitten.jpg'; // Images need to be imported through js so webpack will take them and put them into /dist/img. It's important that the path from index.html to images in /src is the same as the path from index.html to images in /dist
import { testImportFunc } from './components/test' // This is how to import from other modules

console.log('test')
testImportFunc() // Test function imported from other module

// This is how to add images from JS
const html = `<img src=${KittenImage} alt="Kitten">`
document.querySelector('body').insertAdjacentHTML('beforeend', html)


const tabs = document.querySelector('.tabs')  // This is how to initialize materialize components
var instance = M.Tabs.init(tabs); // This is how to initialize materialize components

