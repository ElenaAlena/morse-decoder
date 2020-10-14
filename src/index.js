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
function add0(expr){
    return expr.padStart(10-(expr.length % 10)+expr.length,0);
}

function decode(expr) {
    let words = expr.split("**********");
  let decodeWords=[];
    words.forEach(word => {
        let letters = add0(word).match(/.{1,10}/g);
      let decodeWord = "";
        letters.forEach(letter => {
          let symbols = letter.match(/.{1,2}/g);
          let result = symbols.map(function(item, index, array) {
            if(item=="11") return "-";
            else if(item=="10") return ".";
            else return "";
          });
          if(result.join("").length)
            decodeWord +=MORSE_TABLE[(result.join(""))];
        })
          decodeWords.push(decodeWord);
    });
    return decodeWords.join(" ");
}

module.exports = {
    decode
}