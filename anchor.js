const isTabInView = () => !document.hidden;
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);