const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
console.log("1 || 2 = "+(1 || 2));