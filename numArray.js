const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);