const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;