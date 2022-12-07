
export default function Sound() {
  
  const forest = new Audio('https://github.com/ManuelaAlecio/FocusTimer-2.0/blob/master/sounds/forest.wav')
  const rain = new Audio('https://github.com/ManuelaAlecio/FocusTimer-2.0/blob/master/sounds/rain.wav')
  const store = new Audio('https://github.com/ManuelaAlecio/FocusTimer-2.0/blob/master/sounds/store.wav')
  const fire = new Audio('https://github.com/ManuelaAlecio/FocusTimer-2.0/blob/master/sounds/fire.wav')
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
