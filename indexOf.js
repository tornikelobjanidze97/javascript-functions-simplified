const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const updated = numbers.filter(element => element > 6);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");