const flattenedArray = arr => [].concat(...arr);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const goToTop = () => window.scrollTo(0, 0);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
console.log(1 +  "2" + "2");
const resultingPromises = urls.map((url) => makHttpRequest(url));