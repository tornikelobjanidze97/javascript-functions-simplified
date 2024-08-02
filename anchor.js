const isArray = (arr) => Array.isArray(arr);
const resultingPromises = urls.map((url) => makHttpRequest(url));