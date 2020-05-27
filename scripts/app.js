const div = document.createElement('div')
div.textContent = 'Welcome to my virtual keyboard for Windows. Change layout by pressing ctrl + alt';
div.setAttribute('class', 'note')
document.body.appendChild(div)

const textA = document.createElement('textarea')
textA.setAttribute('id', 'note')
textA.setAttribute('readonly', '')

document.body.appendChild(textA)


let language = 1

if (parseInt(localStorage.langMem, 0) !== language) {
  language = parseInt(localStorage.langMem, 0)
}

const englishFirstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const englishSecondRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const englishThirdRow = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

const greekFirstRow = ['θ', 'ω', 'ε', 'ρ', 'τ', 'ψ', 'υ', 'ι', 'ο', 'π']
const greekSecondRow = ['α', 'σ', 'δ', 'φ', 'γ', 'η', 'ς', 'κ', 'λ']
const greekThirdRow = ['ζ', 'χ', 'ξ', 'ώ', 'β', 'ν', 'μ']

const commonZero = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=']
const commonFirst = ['[', ']', '\\']
const commonSecond = [';', '\'']
const commonThird = [',', '.', '/']

const special = ['Backspace', 'Tab', 'Del', 'CapsLock', 'Enter', 'Shift', '◄', '▼', '►', '▲', 'Ctrl', 'Win', 'Alt', '']


class Keyboard {
  constructor(val = []) {
    this.val = val
  }

  createKeyboard(lang) {
    if (lang === 1) {
      console.log('english layout')
      this.val = commonZero.map((item) => `<div class="key regular-key double-key" onclick="keyPress(${item})" id="${item}">${item}</div>`)
        .concat(`<div class="key backspace-key special-key" onclick="keyPress('${special[0]})" id="${special[0]}">${special[0]}</div>`)
        .concat(`<div class="key tab-key special-key" onclick="keyPress('${special[1]}')" id="${special[1]}">${special[1]}</div>`)
        .concat(englishFirstRow.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(commonFirst.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(`<div class="key special-key" onclick="keyPress('${special[2] })" id="${special[2]}">${special[2]}</div>`)
        .concat(`<div class="key special-key caps-key" onclick="keyPress('${special[3]}')" id="${special[3]}">${special[3]}</div>`)
        .concat(englishSecondRow.map((item) => `<div class="key regular-key" onclick="keyPress('${item})" id="${item}">${item}</div>`))
        .concat(commonSecond.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(`<div class="key special-key enter-key" onclick="keyPress('${special[4]}')" id="${special[4]}">${special[4]}</div>`)
        .concat(`<div class="key special-key shift-key" style="margin-left: 0" onclick="keyPress('${special[5]}')" id="${special[5]}">${special[5]}</div>`)
        .concat(englishThirdRow.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(commonThird.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(`<div class="key special-key" onclick="keyPress('${special[9]}')" id="${special[9]}">${special[9]}</div>`)
        .concat(`<div class="key special-key shift-key" style="margin-right: 1px" onclick="keyPress('${special[5]} right')" id="${special[5]} right">${special[5]}</div>`)
        .concat(`<div class="key special-key" style="margin-left: 0" onclick="keyPress('${special[10]}')" id="${special[10]}">${special[10]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[11]} right')" id="${special[11]}">${special[11]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[12]}')" id="${special[12]}">${special[12]}</div>`)
        .concat(`<div class="key space-key" onclick="keyPress('space')" id="space">${special[13]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[6]}')" id="${special[6]}">${special[6]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[7]}')" id="${special[7]}">${special[7]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[8]}')" id="${special[8]}">${special[8]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[10]} right')" id="${special[10]} right">${special[10]}</div>`)
      this.val = this.val.join('')
      return this
    }
    if (lang === 2) {
      console.log('greek layout')

      this.val = commonZero.map((item) => `<div class="key regular-key double-key" onclick="keyPress(${item})" id="${item}">${item}</div>`)
        .concat(`<div class="key backspace-key special-key" onclick="keyPress('${special[0]})" id="${special[0]}">${special[0]}</div>`)
        .concat(`<div class="key tab-key special-key" onclick="keyPress('${special[1]}')" id="${special[1]}">${special[1]}</div>`)
        .concat(greekFirstRow.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(commonFirst.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(`<div class="key special-key" onclick="keyPress('${special[2] })" id="${special[2]}">${special[2]}</div>`)
        .concat(`<div class="key special-key caps-key" onclick="keyPress('${special[3]}')" id="${special[3]}">${special[3]}</div>`)
        .concat(greekSecondRow.map((item) => `<div class="key regular-key" onclick="keyPress('${item})" id="${item}">${item}</div>`))
        .concat(commonSecond.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(`<div class="key special-key enter-key" onclick="keyPress('${special[4]}')" id="${special[4]}">${special[4]}</div>`)
        .concat(`<div class="key special-key shift-key" style="margin-left: 0" onclick="keyPress('${special[5]}')" id="${special[5]}">${special[5]}</div>`)
        .concat(greekThirdRow.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(commonThird.map((item) => `<div class="key regular-key" onclick="keyPress('${item}')" id="${item}">${item}</div>`))
        .concat(`<div class="key special-key" onclick="keyPress('${special[9]}')" id="${special[9]}">${special[9]}</div>`)
        .concat(`<div class="key special-key shift-key" style="margin-right: 1px" onclick="keyPress('${special[5]} right')" id="${special[5]} right">${special[5]}</div>`)
        .concat(`<div class="key special-key" style="margin-left: 0" onclick="keyPress('${special[10]}')" id="${special[10]}">${special[10]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[11]} right')" id="${special[11]}">${special[11]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[12]}')" id="${special[12]}">${special[12]}</div>`)
        .concat(`<div class="key space-key" onclick="keyPress('space')" id="space">${special[13]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[6]}')" id="${special[6]}">${special[6]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[7]}')" id="${special[7]}">${special[7]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[8]}')" id="${special[8]}">${special[8]}</div>`)
        .concat(`<div class="key special-key" onclick="keyPress('${special[10]} right')" id="${special[10]} right">${special[10]}</div>`)
      this.val = this.val.join('')
      return this
    }
    return 0
  }
}

const englishKeyboard = new Keyboard()

const keyboard = document.createElement('div')

keyboard.className = 'keyboard'

keyboard.innerHTML = englishKeyboard.createKeyboard(language).val
document.body.appendChild(keyboard)

const keySequence = []

let pressedShift = false
let pressedCaps = false

document.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    pressedShift = false
  }
})

const addText = (sign) => {
  if (language === 2 && (keySequence[keySequence.length - 1] === 'Shift' || keySequence[keySequence.length - 1] === 'Shift right')) {
    pressedShift = true
  }

  if (sign === special[0]) {
    if (textA.textContent.length > 0) {
      textA.textContent = textA.textContent.substr(0, textA.textContent.length - 1)
    }
  } else if (sign === 'space') {
    textA.textContent += ' '
  } else if (sign === 'Enter') {
    textA.textContent += '\n'
  } else if (sign === 'Tab') {
    textA.textContent += '\t'
  } else if (sign === 'Del') {
    textA.textContent += ''
  } else if (sign === 'Shift' || sign === 'Shift right') {
    textA.textContent += ''
  } else if (sign === 'Win') {
    textA.textContent += ''
  } else if (sign === 'Ctrl' || sign === 'Ctrl right' || sign === 'Alt') {
    textA.textContent += ''
  } else if (language === 2 && (keySequence[keySequence.length - 1] === 'Shift' || keySequence[keySequence.length - 1] === 'Shift right')) {
    pressedShift = true
  } else if (language === 2 && pressedCaps && pressedShift) {
    textA.textContent += sign.toLowerCase()
  } else if (language === 2 && pressedCaps && sign !== 'CapsLock') {
    textA.textContent += sign.toUpperCase()
  } else if (pressedShift) {
    textA.textContent += sign.toUpperCase()
  } else if (sign === 'CapsLock') {
    textA.textContent += ''
  } else {
    textA.textContent += sign
  }
}

const keyPress = (key) => {
  let newKey = key
  const commonAndAltKeys = ['`', '~', '1', '!', '2', '@', '3', '#', '4', '$', '5', '%', '6', '^', '7', '&', '8', '*', '9', '(', '0', ')', '-', '_', '=', '+',
    '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?']
  const commonAltKeys = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?']
  if (commonAltKeys.includes(key)) {
    commonAndAltKeys.map((item, index) => {
      if (index % 2 !== 0) {
        if (key === item) {
          addText(key)
          newKey = commonAndAltKeys[index - 1]
        }
      }
      return 0
    })
  } else {
    if (key === 'CapsLock' && !pressedCaps) {
      pressedCaps = true
      document.getElementById('CapsLock').classList.add('caps-key-on')
    } else if (key === 'CapsLock') {
      pressedCaps = false
      document.getElementById('CapsLock').classList.remove('caps-key-on')
    } else if (key === 'Alt right') {
      newKey = 'Alt'
    } else if (key === 'Dead') {
      newKey = '~'
    }
    let pressedKey
    if (key.length === 1) {
      pressedKey = document.getElementById(key.toLowerCase())
    } else {
      pressedKey = document.getElementById(key)
    }
    if (!pressedKey.classList.contains('key-press')) {
      pressedKey.classList.add('key-press')
    } else {
      pressedKey.classList.remove('key-press')
    }
    setTimeout(() => {
      pressedKey.classList.remove('key-press')
    }, 200)
    addText(newKey)
  }
}

function logKey(e) {
  if (e.getModifierState('CapsLock')) {
    pressedCaps = true
    document.getElementById('CapsLock').classList.add('caps-key-on')
  } else {
    pressedCaps = false
    document.getElementById('CapsLock').classList.remove('caps-key-on')
  }
  if (e.code === 'Backquote' && pressedShift) {
    e.preventDefault()
  }
  if (e.code === 'AltLeft' || e.code === 'AltRight') {
    e.preventDefault()
  }
  if (e.code === 'Tab') {
    e.preventDefault()
  }

  let key = ''
  const specialKeyCodes = ['ShiftRight', 'Shift right', 'MetaLeft', 'Win', 'ControlLeft', 'Ctrl', 'ControlRight', 'Ctrl right', 'AltRight', 'Alt right',
    'Space', 'space', 'Delete', 'Del', 'ArrowUp', '▲', 'ArrowDown', '▼', 'ArrowLeft', '◄', 'ArrowRight', '►']
  const greekCodes = ['KeyQ', 'θ', 'KeyW', 'ω', 'KeyE', 'ε', 'KeyR', 'ρ', 'KeyT', 'τ', 'KeyY', 'ψ', 'KeyU', 'υ', 'KeyI', 'ι', 'KeyO', 'ο', 'KeyP', 'π',
    'KeyA', 'α', 'KeyS', 'σ', 'KeyD', 'δ', 'KeyF', 'φ', 'KeyG', 'γ', 'KeyH', 'η', 'KeyJ', 'ς', 'KeyK', 'κ', 'KeyL', 'λ',
    'KeyZ', 'ζ', 'KeyX', 'χ', 'KeyC', 'ξ', 'KeyV', 'ώ', 'KeyB', 'β', 'KeyN', 'ν', 'KeyM', 'μ']
  if (specialKeyCodes.includes(e.code)) {
    key = specialKeyCodes[specialKeyCodes.findIndex((el) => el === e.code) + 1]
  } else if (language === 2 && greekCodes.includes(e.code)) {
    key = greekCodes[greekCodes.findIndex((el) => el === e.code) + 1]
  } else {
    key = e.key
  }

  if ((keySequence[keySequence.length - 1] === 'Ctrl' && key === 'Alt')) {
    if (language === 1) {
      language = 2
      localStorage.setItem('langMem', 2)
    } else {
      language = 1
      localStorage.setItem('langMem', 1)
    }
    keyboard.innerHTML = englishKeyboard.createKeyboard(language).val
  }
  keySequence.push(key)
  keyPress(key)
}

document.addEventListener('keydown', logKey)
