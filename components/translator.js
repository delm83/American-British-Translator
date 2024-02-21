const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    convertToBritish(text){
      let currentWord='';
    let words= text.split(/[\s]+/);
        let translation = '';
       for (let x in words)
  if (Object.keys(americanToBritishSpelling).includes(words[x])){
translation+=americanToBritishSpelling[words[x]]+' ';
  }else translation+=words[x]+' ';
        return translation;
      }

      convertToAmerican(text){
        let words= text.split(/[\s]+/);
        return words;
      }
}

module.exports = Translator;