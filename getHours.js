const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const uniqueArr = (arr) => [...new Set(arr)];
const intermediateAppPath = path.join(buildOutputPath, 'app');