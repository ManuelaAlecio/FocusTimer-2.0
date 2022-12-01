import Sound from "./sounds.js"
import Controls from "./controls.js"

const forestSoundOff = document.querySelector('#forestSoundOff')
const forestSoundOn = document.querySelector('#forestSoundOn')
const rainSoundOff = document.querySelector('#rainSoundOff')
const rainSoundOn = document.querySelector('#rainSoundOn')
const storeSoundOff = document.querySelector('#storeSoundOff')
const storeSoundOn = document.querySelector('#storeSoundOn')
const fireSoundOff = document.querySelector('#fireSoundOff')
const fireSoundOn = document.querySelector('#fireSoundOn')

const sound = Sound()
const controls = Controls(
  forestSoundOff,
  forestSoundOn,
  rainSoundOff,
  rainSoundOn,
  storeSoundOff,
  storeSoundOn,
  fireSoundOff,
  fireSoundOn
)

forestSoundOff.addEventListener('click', () => {
  controls.forestToggle()
  sound.forestSoundPlay()
})

forestSoundOn.addEventListener('click', () => {
  controls.forestToggle()
  sound.forestSoundPause()
})

rainSoundOff.addEventListener('click', () => {
  controls.rainToggle()
  sound.rainSoundPlay()
})

rainSoundOn.addEventListener('click', () => {
  controls.rainToggle()
  sound.rainSoundPause()
})

storeSoundOff.addEventListener('click', () => {
  controls.storeToggle()
  sound.storeSoundPlay()
})

storeSoundOn.addEventListener('click', () => {
  controls.storeToggle()
  sound.storeSoundPause()
})

fireSoundOff.addEventListener('click', () => {
  controls.fireToggle()
  sound.fireSoundPlay()
})

fireSoundOn.addEventListener('click', () => {
  controls.fireToggle()
  sound.fireSoundPause()
})