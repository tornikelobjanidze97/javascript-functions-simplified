const scriptRootPath = path.join(repositoryRootPath, 'script');
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const isTabInView = () => !document.hidden;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;