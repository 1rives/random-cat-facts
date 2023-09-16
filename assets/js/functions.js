/**
 * Random Cat Facts
 *
 * All the used constants are defined in main.js.
 *
 * @link   https://github.com/1rives/random-cat-facts
 * @file   Contains all used functions on the main script
 * @author 1rives
 */

/**
 * Returns the response on JSON format
 *
 * @param   {string} url     Request URL
 * @returns {Response}       JSON fetch response
 */
async function fetchJSON(url) {
    const response = await fetch(url);
    return await response.json();
}

/**
 * Updates the current cat image
 *
 * @param   {HTMLImageElement} element      Current image element
 * @param   {string} image                  New image URL
 */
function updateImage(element, image) {
    element.setAttribute('src', image);
}

/**
 * Toggles the 'is-loading' class and the 'disabled' attribute to
 * disable or enable the button on a request
 *
 * @param   {HTMLButtonElement} element      Button element
 */
function toggleButton(element) {
    element.classList.toggle('is-loading');
    element.toggleAttribute('disabled');
}

/**
 * Returns an encoded URL containing the fact parameter.
 *
 * @todo Fix dots not showing on image
 * @param   {string} param      URL parameter for the image text
 * @returns {string}            Formatted URL
 */
function createURL(param) {
    let url = `${CATIMAGE_URL}/${param}?width=${WIDTH}&height=${HEIGHT}`.replaceAll(" ", "%20");
    let filteredUrl = url.replace("\\", "");
    filteredUrl = filteredUrl.replace("%%", "%");
    return filteredUrl;
}
