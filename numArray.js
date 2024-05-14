const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const buildOutputPath = path.join(repositoryRootPath, 'out');