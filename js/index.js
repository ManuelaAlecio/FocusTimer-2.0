const forestSoundOff = document.querySelector('#forestSoundOff')
const forestSoundOn = document.querySelector('#forestSoundOn')
const rainSoundOff = document.querySelector('#rainSoundOff')
const rainSoundOn = document.querySelector('#rainSoundOn')

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

rainSoundOff.addEventListener('click', function() {
  // rainSoundOff.classList.toggle('hide')
  // rainSoundOn.classList.toggle('hide')
  // rainSound.play()
  console.log('estado')
})