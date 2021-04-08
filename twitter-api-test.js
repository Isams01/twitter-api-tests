const { default: axios } = require('axios');
const Twit = require('twit');
const Sentiment = require('sentiment');
const testData = require('./example-data');
require('dotenv').config()


const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.AUTH_ACCESS,
  access_token_secret: process.env.AUTH_SECRET,
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
});


// T.get('search/tweets', { q: 'lockdown lang:en', count: 10 }, function(err, data, response) {
//   console.log(data)
// })
// '-123.116226','49.246292','60mi'

// let sanFran = ['-122.75', '36.8', '-121.75', '37.8'];
// let van = ['-123.116226','49.246292','50mi' ];
// let victoria = ['-123.453811', '48.401368','-123.305476', '48.494172']


// // let calgary = ['-114.0719', '51.0447']
// let calgary = '(point_radius:[-114.0719 51.0447 50mi] OR place:"Calgary, AB")'
// let test = '#FlagstaffFire (point_radius:[-105.292778 40.019444 25mi])'

// 49.246292, -123.116226
// ################################# Stream ########################################
// const stream = T.stream('statuses/filter', {
//   locations: victoria,
//   // point_radius: '-123.116226,49.246292,60mi',
//   track: 'antimask',
//   has: 'geo',
//   language: 'en'
// });

// // When a new tweet with the keyword is published, this function will be called
// stream.on('tweet', async tweet => {
//   // const {
//   //   created_at,
//   //   id,
//   //   lang,
//   //   text,
//   //   user: { screen_name, profile_image_url_https },
//   //   timestamp_ms,
//   // } = tweet;

//   console.log(tweet.user.name)
//   console.log(tweet.user.location)
//   console.log(tweet.text)
//   console.log(tweet.place.bounding_box.coordinates)
// });





// ############################################# GET with sentiment score #########################################
//  geocode: '51.0447 -114.0719 25mi'

// %23covid19AB) -filter%3Areplies
//calgary // geocode: '51.0447,-114.0719,100mi'
// victoria id: 4fdbcad8c3ed7790

T.get('search/tweets', { q:'#apecave', count: 15 }, function(err, data, response) {
  console.log(data)
  console.log("place: ", data.statuses[0].place.bounding_box.coordinates)
})

// const sentiment = new Sentiment();
 
// testData.statuses.forEach(tweet => {
//   console.log(tweet.text);
//   console.log("Tweet Sentiment Score: ", sentiment.analyze(tweet.text));
//   console.log('');
//   console.log('#######################################################')
//   console.log('');
// })

