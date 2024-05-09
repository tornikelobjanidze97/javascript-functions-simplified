const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const isEmptyObject = obj => Object.keys(obj).length === 0;
const result = await makeHttpRequest(url);