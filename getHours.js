const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());