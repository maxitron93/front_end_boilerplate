import 'normalize.css/normalize.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/styles.scss';
import { importImages } from './importImages'
import { elements } from './elements'
import { changeHeadingColor } from './Controller/headingController'

// Import something from /src/js/importImages.js so webpack will put the images into /dist/img when building
importImages()

// Initiate materialize components
const instance = M.Tabs.init(elements.tabs); // This is how to initialize materialize components

// Add state here
const state = {
    headingColor: 'green'
}

// Add event listeners here
elements.mainHeader.addEventListener('click', () => {
    changeHeadingColor(state)
})
