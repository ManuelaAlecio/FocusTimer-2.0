
export default function Sound() {
  
  const forest = new Audio('../sounds/forest.wav')
  const rain = new Audio('../sounds/rain.wav')
  const store = new Audio('../sounds/store.wav')
  const fire = new Audio('../sounds/fire.wav')
  forest.loop = true
  rain.loop = true
  store.loop = true
  fire.loop = true

  function forestPlay() {
    forest.play()
  }

  function forestPause() {
    forest.pause()
  }

  function rainPlay() {
    rain.play()
  }

  function rainPause() {
    rain.pause()
  }

  function storePlay() {
    store.play()
  }

  function storePause() {
    store.pause()
  }

  function firePlay() {
    fire.play()
  }

  function firePause() {
    fire.pause()
  }

  return {
    forestPlay,
    forestPause,
    rainPlay,
    rainPause,
    storePlay,
    storePause,
    firePlay,
    firePause
  }
}
