


var div = document.createElement('div');
div.textContent = "Sup, y'all?";
div.setAttribute('class', 'note');
document.body.appendChild(div);

var textA = document.createElement('textarea');
// textA.textContent = "Sup, y'all?";
textA.setAttribute('id', 'note');

document.body.appendChild(textA);


let language = 1

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
    constructor(val = [], text, lang) {
        this.val = val
        this.text = text
        this.lang = lang
    }

    changeLang(lang) {
        
    }
    createKeyboard(lang) {
        if (lang === 1) {
            console.log('english layout')
            // this.val = commonZero.map((item) => '<div class="key regular-key">' + item + '</div>')
            //     .concat('<div class="key special-key">' + special[0] + '</div>' + '</div>')
                        
            this.val = commonZero.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>')
                .concat('<div class="key backspace-key special-key" onclick="keyPress('+ '\'' + special[0] + '\'' +')" id="' + special[0] + '">' + special[0] + '</div>')
                .concat('<div class="key tab-key special-key" onclick="keyPress('+ '\'' + special[1] + '\'' +')" id="' + special[1] + '">' + special[1] + '</div>')
                .concat(englishFirstRow.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat(commonFirst.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[2] + '\'' +')" id="' + special[2] + '">' + special[2] + '</div>')
                .concat('<div class="key special-key caps-key" onclick="keyPress('+ '\'' + special[3] + '\'' +')" id="' + special[3] + '">' + special[3] + '</div>')
                .concat(englishSecondRow.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat(commonSecond.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat('<div class="key special-key enter-key" onclick="keyPress('+ '\'' + special[4] + '\'' +')" id="' + special[4] + '">' + special[4] + '</div>')
                .concat('<div class="key special-key shift-key" style="margin-left: 0" onclick="keyPress('+ '\'' + special[5] + '\'' +')" id="' + special[5] + '">' + special[5] + '</div>')
                .concat(englishThirdRow.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat(commonThird.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[9] + '\'' +')" id="' + special[9] + '">' + special[9] + '</div>')  // ArrowUp
                .concat('<div class="key special-key shift-key" style="margin-right: 1px" onclick="keyPress('+ '\'' + special[5] + ' right' + '\'' +')" id="' + special[5] + ' right' + '">' + special[5] + '</div>')
                .concat('<div class="key special-key" style="margin-left: 0" onclick="keyPress('+ '\'' + special[10] + '\'' +')" id="' + special[10] + '">' + special[10] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[11] + ' right' + '\'' +')" id="' + special[11] + '">' + special[11] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[12] + '\'' +')" id="' + special[12] + '">' + special[12] + '</div>')
                .concat('<div class="key space-key" onclick="keyPress('+ '\'' + 'space' + '\'' +')" id="space">' + special[13] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[6] + '\'' +')" id="' + special[6] + '">' + special[6] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[7] + '\'' +')" id="' + special[7] + '">' + special[7] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[8] + '\'' +')" id="' + special[8] + '">' + special[8] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[10] + ' right' +  '\'' +')" id="' + special[10] + ' right' + '">' + special[10] + '</div>')
            return this
        } else if (lang === 2){
            console.log('greek layout')
            // this.val = commonZero.map((item) => '<div class="key regular-key">' + item + '</div>')
            //     .concat('<div class="key special-key">' + special[0] + '</div>' + '</div>')
                        
            this.val = commonZero.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>')
                .concat('<div class="key backspace-key special-key" onclick="keyPress('+ '\'' + special[0] + '\'' +')" id="' + special[0] + '">' + special[0] + '</div>')
                .concat('<div class="key tab-key special-key" onclick="keyPress('+ '\'' + special[1] + '\'' +')" id="' + special[1] + '">' + special[1] + '</div>')
                .concat(greekFirstRow.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat(commonFirst.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[2] + '\'' +')" id="' + special[2] + '">' + special[2] + '</div>')
                .concat('<div class="key special-key caps-key" onclick="keyPress('+ '\'' + special[3] + '\'' +')" id="' + special[3] + '">' + special[3] + '</div>')
                .concat(greekSecondRow.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat(commonSecond.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat('<div class="key special-key enter-key" onclick="keyPress('+ '\'' + special[4] + '\'' +')" id="' + special[4] + '">' + special[4] + '</div>')
                .concat('<div class="key special-key shift-key" style="margin-left: 0" onclick="keyPress('+ '\'' + special[5] + '\'' +')" id="' + special[5] + '">' + special[5] + '</div>')
                .concat(greekThirdRow.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat(commonThird.map((item) => '<div class="key regular-key" onclick="keyPress('+ '\'' + item + '\'' +')" id="' + item + '">' + item + '</div>'))
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[9] + '\'' +')" id="' + special[9] + '">' + special[9] + '</div>')  // ArrowUp
                .concat('<div class="key special-key shift-key" style="margin-right: 1px" onclick="keyPress('+ '\'' + special[5] + ' right' + '\'' +')" id="' + special[5] + ' right' + '">' + special[5] + '</div>')
                .concat('<div class="key special-key" style="margin-left: 0" onclick="keyPress('+ '\'' + special[10] + '\'' +')" id="' + special[10] + '">' + special[10] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[11] + ' right' + '\'' +')" id="' + special[11] + '">' + special[11] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[12] + '\'' +')" id="' + special[12] + '">' + special[12] + '</div>')
                .concat('<div class="key space-key" onclick="keyPress('+ '\'' + 'space' + '\'' +')" id="space">' + special[13] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[6] + '\'' +')" id="' + special[6] + '">' + special[6] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[7] + '\'' +')" id="' + special[7] + '">' + special[7] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[8] + '\'' +')" id="' + special[8] + '">' + special[8] + '</div>')
                .concat('<div class="key special-key" onclick="keyPress('+ '\'' + special[10] + ' right' +  '\'' +')" id="' + special[10] + ' right' + '">' + special[10] + '</div>')
            return this
        }
    }

}


// document.addEventListener('keydown', logKey) 

// function logKey(e) {
//     console.log(e.key)
// }

document.addEventListener('keydown', logKey) 

function logKey(e) {
    let key = ""
    const specialKeyCodes = ['ShiftRight', 'Shift right', 'MetaLeft', 'Win', 'ControlLeft', 'Ctrl', 'ControlRight', 'Ctrl right', 'AltRight', 'Alt right', 
                            'Space', 'space', 'Delete', 'Del', 'ArrowUp', '▲', 'ArrowDown', '▼' , 'ArrowLeft', '◄', 'ArrowRight', '►']
    const greekCodes = ['KeyQ', 'θ', 'KeyW', 'ω', 'KeyE', 'ε', 'KeyR', 'ρ', 'KeyT', 'τ', 'KeyY', 'ψ', 'KeyU', 'υ', 'KeyI', 'ι', 'KeyO', 'ο', 'KeyP', 'π', 
                        'KeyA','α', 'KeyS', 'σ', 'KeyD', 'δ', 'KeyF', 'φ', 'KeyG', 'γ', 'KeyH', 'η', 'KeyJ', 'ς', 'KeyK', 'κ', 'KeyL', 'λ', 
                        'KeyZ', 'ζ', 'KeyX', 'χ', 'KeyC', 'ξ', 'KeyV', 'ώ', 'KeyB', 'β', 'KeyN', 'ν', 'KeyM', 'μ']
    if (specialKeyCodes.includes(e.code)) {
        key = specialKeyCodes[specialKeyCodes.findIndex(el => el === e.code) + 1]
    } else if (greekCodes.includes(e.code)){
        key = greekCodes[greekCodes.findIndex(el => el === e.code) + 1]
    }
    else {
        key = e.key
    }
    
    keyPress(key)
    
}



const keyPress = (key) => {
    let pressedKey = document.getElementById(key)
    if (!pressedKey.classList.contains('key-press')) {
        pressedKey.classList.add("key-press")
    } else {
        pressedKey.classList.remove("key-press")
    }
    setTimeout(() => {
        pressedKey.classList.remove("key-press")
    },500)
    addText(key)
}

const addText = (sign) => {
    console.log(sign)
    if (sign === special[0]) {
        if(textA.textContent.length > 0) {
            textA.textContent = textA.textContent.substr(0, textA.textContent.length - 1)
        }
    } else if (sign === "space") {
        textA.textContent += " "
    }
    else if (special.includes(sign)){
        sign = ''
    } else if (sign === "Enter") {
        console.log('siema neter')
        textA.textContent += "\n Ebter"
    }  else if (sign === 'Tab') {
        textA.textContent += '\t'
    }
    else {
        textA.textContent += sign
    }

}


let englishKeyboard = new Keyboard([], "", 2)
console.log(englishKeyboard.createKeyboard(language))

let keyboard = document.createElement('div')
// let text = document.createElement('textarea')

keyboard.className = "keyboard"


keyboard.innerHTML = englishKeyboard.createKeyboard(language).val.join('')
document.body.appendChild(keyboard)
