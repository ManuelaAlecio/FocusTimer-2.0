
export default function Sound() {
  
  const forest = new Audio('../sounds/forest.mp3')
  const rain = new Audio('../sounds/rain.mp3')
  const store = new Audio('../sounds/store.mp3')
  const fire = new Audio('../sounds/fire.mp3')
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
