// GRAB THE PACKAGES/VARIABLES WE NEED
const express = require('express')
const app = express()
const ig = require('instagram-node').instagram()

// tell node where to look for site resources
app.use(express.static(__dirname + '/public'))

// get access token here: http://instagram.pixelunion.net/
ig.use({
  access_token: '965338070.1677ed0.430ee970bb1e4099b1cde402a4d6b393'
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
    res.render('pages/index', { grams: medias })
  })
})
// START THE SERVER
app.listen(3005)
console.log('App started!, Look at http://localhost:3005')
