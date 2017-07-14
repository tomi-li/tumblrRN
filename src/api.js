/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

let tumblr = require('tumblr.rn.js');

//lishuo.tomi@gmail.com
let TumblrClient = tumblr.createClient({
  consumer_key: 'yWK2r2e46rYxiJgQz5Sp83rElYXS0sww8qMxjAhQwTwgILpztu',
  consumer_secret: '63hZKb4QIvT5ayyv0jVIEZVFzQA9SpfOOdGIF1Da5ZzBtGfyYQ',
  token: 'ckArQsBVc7xp8rYZEy34IY9uDRZ66kCv81ob3Kwg8K33Jrr7b2',
  token_secret: 'grEl8cFHwZT7Y6UcaFllWgXjenibUQ6j53HYK385qakAobtckX',
});


// lishuo.tomi@hotmail.com
//let TumblrClient = tumblr.createClient({
//  consumer_key: 'LXMQBT1mHyR16EaGYR3zcJ6d4oTMBEiHPo4lF66LDUUfZBQK28',
//  consumer_secret: 'kK3OuagPXF7lAY4efsjm92uDMwsYWtPnLSyGugQXJmt1kIX3PF',
//  token: 'wKjxvSChSGMFpoUC6JbgMmp5lpUFalv8Pj6oUsw2n34YX3e7Bh',
//  token_secret: 'jYg0SadaEMTtqwL70ozX8Pu7zgQfraPeEkEWpgksgl8Z5Egrja',
//});

export { TumblrClient }