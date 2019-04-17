const player = require('play-sound')(opts = {
  player: 'mpg321'
})

const axios = require('axios')

let online = false

setInterval(async () => {
  const status = await ping()
  if (online != status) {        
    if (status) {
      console.log('online')
      player.play('./holygrenade.mp3')
    } else {
      console.log('offline')
      player.play('./css1_scream1.mp3')
    }
  }

  online = status
}, 2000)

async function ping () {
  try {
    await axios.get('http://stackkit.services')
    return true
  } catch (err) {
    return false
  }
}
