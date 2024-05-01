const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const apmRootPath = path.join(repositoryRootPath, 'apm');
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;