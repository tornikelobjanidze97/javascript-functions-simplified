const executableName = getExecutableName(channel, appName);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const fullName = name || 'buddy';