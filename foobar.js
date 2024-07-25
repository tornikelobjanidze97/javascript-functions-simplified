var arr3 = "jones".split('');
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;