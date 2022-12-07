import Sound from "./sounds.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import {
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
} from "./elements.js"

const sound = Sound()
const controls = Controls(
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
)
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  minutes
})

forestSoundOff.addEventListener('click', () => {
  controls.forestToggle()
  sound.forestPlay()
})

forestSoundOn.addEventListener('click', () => {
  controls.forestToggle()
  sound.forestPause()
})

rainSoundOff.addEventListener('click', () => {
  controls.rainToggle()
  sound.rainPlay()
})

rainSoundOn.addEventListener('click', () => {
  controls.rainToggle()
  sound.rainPause()
})

storeSoundOff.addEventListener('click', () => {
  controls.storeToggle()
  sound.storePlay()
})

storeSoundOn.addEventListener('click', () => {
  controls.storeToggle()
  sound.storePause()
})

fireSoundOff.addEventListener('click', () => {
  controls.fireToggle()
  sound.firePlay()
})

fireSoundOn.addEventListener('click', () => {
  controls.fireToggle()
  sound.firePause()
})

buttonPlay.addEventListener('click', () => {
  controls.playPauseToggle()
  timer.play()
})

buttonPause.addEventListener('click', () => {
  controls.playPauseToggle()
  timer.hold()
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  controls.forestReset()
  controls.rainReset()
  controls.storeReset()
  controls.fireReset()
  timer.reset()
  sound.forestPause()
  sound.rainPause()
  sound.storePause()
  sound.firePause()
})

buttonMore.addEventListener('click', () => {
  controls.increment()
})

buttonLess.addEventListener('click', () => {
  controls.decrement()
})