const forestSoundOff = document.querySelector('#forestSoundOff')
const forestSoundOn = document.querySelector('#forestSoundOn')
const rainSoundOff = document.querySelector('#rainSoundOff')
const rainSoundOn = document.querySelector('#rainSoundOn')
const storeSoundOff = document.querySelector('#storeSoundOff')
const storeSoundOn = document.querySelector('#storeSoundOn')
const fireSoundOff = document.querySelector('#fireSoundOff')
const fireSoundOn = document.querySelector('#fireSoundOn')

const forestSound = new Audio('../sounds/forest.wav')
const rainSound = new Audio('../sounds/rain.wav')
const storeSound = new Audio('../sounds/store.wav')
const fireSound = new Audio('../sounds/fire.wav')

forestSoundOff.addEventListener('click', () => {
  forestSoundOff.classList.toggle('hide')
  forestSoundOn.classList.toggle('hide')
  forestSound.play()
})

forestSoundOn.addEventListener('click', () => {
  forestSoundOff.classList.toggle('hide')
  forestSoundOn.classList.toggle('hide')
  forestSound.pause()
})

rainSoundOff.addEventListener('click', () => {
  rainSoundOff.classList.toggle('hide')
  rainSoundOn.classList.toggle('hide')
  rainSound.play()
})

rainSoundOn.addEventListener('click', () => {
  rainSoundOff.classList.toggle('hide')
  rainSoundOn.classList.toggle('hide')
  rainSound.pause()
})

storeSoundOff.addEventListener('click', () => {
  storeSoundOff.classList.toggle('hide')
  storeSoundOn.classList.toggle('hide')
  storeSound.play()
})

storeSoundOn.addEventListener('click', () => {
  storeSoundOff.classList.toggle('hide')
  storeSoundOn.classList.toggle('hide')
  storeSound.pause()
})

fireSoundOff.addEventListener('click', () => {
  fireSoundOff.classList.toggle('hide')
  fireSoundOn.classList.toggle('hide')
  fireSound.play()
})

fireSoundOn.addEventListener('click', () => {
  fireSoundOff.classList.toggle('hide')
  fireSoundOn.classList.toggle('hide')
  fireSound.pause()
})