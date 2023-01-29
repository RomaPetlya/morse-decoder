const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const MORSE_TABLE = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };

    let codeOfSymbols = []; // коды букв из 1 и 0
    
    let letters = Object.values(MORSE_TABLE) // буквы
    letters.push(' ')
    
    let symbols = Object.keys(MORSE_TABLE)  // точки и тире
    let parts =[]; // строка expr разбитая по 10 символов
    let result = [];

    for (let i = 0; i < symbols.length; i++) {  // цикл для получения кодов из 1 и 0 codeOfSymbols
      let digits = (symbols[i].replace(/[-]/g, '11').replace(/[.]/g, '10'))
      if (digits.length < 10) {
        for (let j = digits.length; j < 10; j++) {
          digits = '0' + digits
        }
      }
      codeOfSymbols.push(digits)
    }
    codeOfSymbols.push('**********')


    for (let j = 0; j < expr.length; j += 10) {
        let a = expr.substr(j,10);
        parts.push(a)
    }
    
    for (let k = 0; k < parts.length; k++) {
        for (let m = 0; m < letters.length; m++) {
            if (parts[k] == codeOfSymbols[m])
            result.push(letters[m])
        }
    }
   return result.join('')
}

module.exports = {
    decode
}