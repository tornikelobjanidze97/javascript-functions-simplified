const isTabInView = () => !document.hidden;
const merge = (a, b) => [...a, ...b];
const repositoryRootPath = path.resolve(__dirname, '..');