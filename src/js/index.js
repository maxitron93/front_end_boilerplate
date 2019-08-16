import 'normalize.css/normalize.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/styles.scss';
import KittenImage from '../img/kitten.jpg'; // This is how to add images
import { testImportFunc } from './components/test' // This is how to import from other modules

console.log('test')
testImportFunc() // Test function imported from other module

// This is how to add images from JS
const html = `<img src=${KittenImage} alt="Kitten">`
document.querySelector('body').insertAdjacentHTML('beforeend', html)


const tabs = document.querySelector('.tabs')  // This is how to initialize materialize components
var instance = M.Tabs.init(tabs); // This is how to initialize materialize components

