var arr1 = "john".split('');
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;