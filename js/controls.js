export default function Controls(
  forestSoundOff,
  forestSoundOn,
  rainSoundOff,
  rainSoundOn,
  storeSoundOff,
  storeSoundOn,
  fireSoundOff,
  fireSoundOn,
  buttonPlay,
  buttonPause,
  minutes,
  minutesDisplay,
  secondsDisplay
) {

  function forestToggle() {
    forestSoundOff.classList.toggle('hide')
    forestSoundOn.classList.toggle('hide')
  }

  function forestReset() {
    forestSoundOn.classList.add('hide')
    forestSoundOff.classList.remove('hide')
  }

  function rainToggle() {
    rainSoundOff.classList.toggle('hide')
    rainSoundOn.classList.toggle('hide')
  }

  function rainReset() {
    rainSoundOff.classList.remove('hide')
    rainSoundOn.classList.add('hide')
  }

  function storeToggle() {
    storeSoundOff.classList.toggle('hide')
    storeSoundOn.classList.toggle('hide')
  }

  function storeReset() {
    storeSoundOff.classList.remove('hide')
    storeSoundOn.classList.add('hide')
  }

  function fireToggle() {
    fireSoundOff.classList.toggle('hide')
    fireSoundOn.classList.toggle('hide')
  }

  function fireReset() {
    fireSoundOff.classList.remove('hide')
    fireSoundOn.classList.add('hide')
  }

  function playPauseToggle() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function increment() {
    minutes = minutes + 5
    
    if (minutes >= 60) {
      minutes = 60
    }
    updateTimerDisplay(minutes, 0)
  }

  function decrement() {
    minutes = minutes - 5
    if(minutes <= 0) {
      minutes = 0
    }
    updateTimerDisplay(minutes, 0)
  }

  return {
    forestToggle,
    forestReset,
    rainToggle,
    rainReset,
    storeToggle,
    storeReset,
    fireToggle,
    fireReset,
    reset,
    playPauseToggle,
    increment,
    decrement
  }
}