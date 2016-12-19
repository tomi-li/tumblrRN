/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

let tumblr = require('tumblr.rn.js');

//lishuo.tomi@gmail.com
// let TumblrClient = tumblr.createClient({
//     consumer_key: 'yWK2r2e46rYxiJgQz5Sp83rElYXS0sww8qMxjAhQwTwgILpztu',
//     consumer_secret: '63hZKb4QIvT5ayyv0jVIEZVFzQA9SpfOOdGIF1Da5ZzBtGfyYQ',
//     token: 'n4CwX8S2GBd0uQ8eVVCjGVAAGcrJgZMxIPYeBF4JsCL3wZRiGp',
//     token_secret: 'QM9y0uXtO3iVS7y1UPMuwaM6Ds9DffCyeZhm63lPuMZKLBScvZ'
// });


// lishuo.tomi@hotmail.com
let TumblrClient = tumblr.createClient({
    consumer_key: 'LXMQBT1mHyR16EaGYR3zcJ6d4oTMBEiHPo4lF66LDUUfZBQK28',
    consumer_secret: 'kK3OuagPXF7lAY4efsjm92uDMwsYWtPnLSyGugQXJmt1kIX3PF',
    token: 'wKjxvSChSGMFpoUC6JbgMmp5lpUFalv8Pj6oUsw2n34YX3e7Bh',
    token_secret: 'jYg0SadaEMTtqwL70ozX8Pu7zgQfraPeEkEWpgksgl8Z5Egrja'
});


console.log('---------- API 初始化 ---------------------');

export {TumblrClient}