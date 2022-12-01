
export default function Sound() {
  
  const forestSound = new Audio('../sounds/forest.wav')
  const rainSound = new Audio('../sounds/rain.wav')
  const storeSound = new Audio('../sounds/store.wav')
  const fireSound = new Audio('../sounds/fire.wav')

  function forestSoundPlay() {
    forestSound.play()
  }

  function forestSoundPause() {
    forestSound.pause()
  }

  function rainSoundPlay() {
    rainSound.play()
  }

  function rainSoundPause() {
    rainSound.pause()
  }

  function storeSoundPlay() {
    storeSound.play()
  }

  function storeSoundPause() {
    storeSound.pause()
  }

  function fireSoundPlay() {
    fireSound.play()
  }

  function fireSoundPause() {
    fireSound.pause()
  }

  return {
    forestSoundPlay,
    forestSoundPause,
    rainSoundPlay,
    rainSoundPause,
    storeSoundPlay,
    storeSoundPause,
    fireSoundPlay,
    fireSoundPause
  }
}
