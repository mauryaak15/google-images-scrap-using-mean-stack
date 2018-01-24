let cheerio = require('cheerio-httpcli')
let Html5Entities = require('html-entities').Html5Entities
let htmlEntities = new Html5Entities()
let url = require('url')

const SEARCH_URL = 'https://www.google.com/search';

module.exports = {
  fetch: (params) => {
    return new Promise((resolve, reject) => {
      cheerio.fetch(SEARCH_URL, params, (err, $, res) => {
        let urls = $('.rg_l').map((index, element) => {
          // console.log($(element).parent().find('.rg_meta').text());
          var meta = JSON.parse($(element).parent().find('.rg_meta').text());
          console.log(meta.ou);
          return {url: meta.ou, type: 'image/'+meta.ity}
        }).get()
        resolve(urls.slice(0, 15))
      })
    })
  }
}