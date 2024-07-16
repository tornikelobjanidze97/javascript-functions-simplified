const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const randomString = () => Math.random().toString(36).slice(2);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);