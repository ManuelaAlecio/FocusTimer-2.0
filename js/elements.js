const buttonPlay = document.querySelector('#buttonPlay')
const buttonPause = document.querySelector('#buttonPause')
const buttonStop = document.querySelector('#buttonStop')
const buttonMore = document.querySelector('#buttonMore')
const buttonLess = document.querySelector('#buttonLess')
const forestSoundOff = document.querySelector('#forestSoundOff')
const forestSoundOn = document.querySelector('#forestSoundOn')
const rainSoundOff = document.querySelector('#rainSoundOff')
const rainSoundOn = document.querySelector('#rainSoundOn')
const storeSoundOff = document.querySelector('#storeSoundOff')
const storeSoundOn = document.querySelector('#storeSoundOn')
const fireSoundOff = document.querySelector('#fireSoundOff')
const fireSoundOn = document.querySelector('#fireSoundOn')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

export {
  buttonLess,
  buttonMore,
  buttonPause,
  buttonPlay,
  buttonStop,
  forestSoundOff,
  forestSoundOn,
  rainSoundOff,
  rainSoundOn,
  storeSoundOff,
  storeSoundOn,
  fireSoundOff,
  fireSoundOn,
  minutesDisplay,
  secondsDisplay,
  minutes
}