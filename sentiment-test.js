const Sentiment = require('sentiment')

const sentiment = new Sentiment();
const neg_result = sentiment.analyze('I really dislike pepsi, i think it sucks');
const pos_result = sentiment.analyze('I really like pepsi, i think it is great');

console.log(neg_result);
console.log(pos_result);