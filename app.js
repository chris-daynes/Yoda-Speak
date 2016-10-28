var dotenv = require('dotenv')
dotenv.load()

var unirest = require('unirest')

var text = 'you are ready luke skywalker'

function textToTranslate (string) {
  var newText = 'https://yoda.p.mashape.com/yoda?sentence=' + string.split(' ').join('+')
  unirest
  .get(newText)
  .header('X-Mashape-Key', process.env.MASH_KEY)
  .header('Accept', 'text/plain')
  .end(function (result) {
    console.log(result.body)
  })
}

textToTranslate(text)
