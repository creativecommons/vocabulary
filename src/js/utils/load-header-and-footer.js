/**
 * @param placeHolderId the id of the containter to load the html @example footer-placeholder
 * 
 * @param htmlFile The html file to load, @example footer.html
*/
export function loadHTML(placeHolderId, htmlFile) {
  fetch(`/specimen/contexts/components/${htmlFile}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.text();
      })
      .then(data => {
          document.getElementById(placeHolderId).innerHTML = data;
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
}
