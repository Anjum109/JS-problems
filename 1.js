// নিচের sentence এ "Rahim" শব্দটি কতবার ব্যাবহার হয়েছে? প্রথমবার 'Rahim' কত নাম্বার পসিশনে পাওয়া গেছে?

const sentence = " My name is Mohammed Musfikur Rahim but everyone calls me Rahim. I am 13 and read in class six. I live at Kaptai in the Rangamati district. My school name is BK Nurul Huda High school. I do my homework and study every day. I study in the evening from 6.00 pm to 10.00 pm. My favourite subject is English. I live with my parents. I love my name Rahim";

const matches = sentence.match(/rahim/gi);
console.log(matches);
// const ocurances = matches.length;
const ocurances = matches ? matches.length : 0;
console.log(ocurances);
// for position 
let position = sentence.search(/Rahim/i);
position = position >= 0 ? position : "not found!";
console.log(position);