const resultingPromises = urls.map((url) => makHttpRequest(url));
const removeDuplicates = (arr) => [...new Set(arr)];