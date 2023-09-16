/**
 * Random Cat Facts
 *
 * @link   https://github.com/1rives/random-cat-facts
 * @file   Main script
 * @author 1rives
 */

// URLs used for requests
const CATIMAGE_URL = 'https://cataas.com/cat/says';
const CATFACT_URL = 'https://catfact.ninja/fact?max_length=40';

// Image dimensions for URL parameters
const WIDTH = "500";
const HEIGHT = "400";

// Elements
let imageElement = document.getElementById('cat__image');
let buttonElement = document.getElementById('submitButton');

buttonElement.addEventListener('click', () => {
    toggleButton(buttonElement);

    fetchJSON(CATFACT_URL)
        .then(request => {
            const imageURL = createURL(request.fact); // Replace fixes error on URL creation
            updateImage(imageElement, imageURL);
        })
        .catch(error => console.error(error.message))
        .finally(() => {
            // Enables the button when image loads completely
            imageElement.addEventListener("load", () => {
                toggleButton(buttonElement);
            }, {once: true})
        });
})
