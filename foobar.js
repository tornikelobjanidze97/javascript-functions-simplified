const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const apmRootPath = path.join(repositoryRootPath, 'apm');
const isEmptyObject = obj => Object.keys(obj).length === 0;