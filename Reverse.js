const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
console.log( "A" - "B" + 2);
const goToTop = () => window.scrollTo(0, 0);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();