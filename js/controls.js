export default function Controls(
  forestSoundOff,
  forestSoundOn,
  rainSoundOff,
  rainSoundOn,
  storeSoundOff,
  storeSoundOn,
  fireSoundOff,
  fireSoundOn
) {

  function forestToggle() {
    forestSoundOff.classList.toggle('hide')
    forestSoundOn.classList.toggle('hide')
  }

  function rainToggle() {
    rainSoundOff.classList.toggle('hide')
    rainSoundOn.classList.toggle('hide')
  }

  function storeToggle() {
    storeSoundOff.classList.toggle('hide')
    storeSoundOn.classList.toggle('hide')
  }

  function fireToggle() {
    fireSoundOff.classList.toggle('hide')
    fireSoundOn.classList.toggle('hide')
  }

  return {
    forestToggle,
    rainToggle,
    storeToggle,
    fireToggle
  }
}