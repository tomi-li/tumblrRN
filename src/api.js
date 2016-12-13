/**
 * All Codes below are Lifetime Warranted by Tomi since 12/12/2016.
 */

let tumblr = require('tumblr.rn.js');

let TumblrClient = tumblr.createClient({
    consumer_key: 'yWK2r2e46rYxiJgQz5Sp83rElYXS0sww8qMxjAhQwTwgILpztu',
    consumer_secret: '63hZKb4QIvT5ayyv0jVIEZVFzQA9SpfOOdGIF1Da5ZzBtGfyYQ',
    token: 'n4CwX8S2GBd0uQ8eVVCjGVAAGcrJgZMxIPYeBF4JsCL3wZRiGp',
    token_secret: 'QM9y0uXtO3iVS7y1UPMuwaM6Ds9DffCyeZhm63lPuMZKLBScvZ'
});

console.log('---------- API 初始化 ---------------------');

export {TumblrClient}