const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    convertToBritish(text){
      let regex = /\d\d:\d\d/
      let match = text.match(regex);
      if(match){text = text.replace(match[0], '<span class="highlight">'+match[0].split(':').join('.')+'</span>');}
       for (let x in americanToBritishSpelling){
       regex = new RegExp(x, 'gi');
       match= text.match(regex);
       if(match){text = text.replace(match, '<span class="highlight">'+americanToBritishSpelling[x]+'</span>')}
       }
       for (let x in americanOnly){
            regex = new RegExp('\\b'+x+'\\b', 'gi');
            match= text.match(regex);
            if(match){text = text.replace(match, '<span class="highlight">'+americanOnly[x]+'</span>')}
            }
            for (let x in americanToBritishTitles){
                  regex = new RegExp(americanToBritishTitles[x]+'\.', 'gi');
                  match= text.match(regex);
                  if(match==x){
                    text = text.replace(match, '<span class="highlight">'+americanToBritishTitles[x]+'</span>')}
                  }
      return text.trim();
      }
      

      convertToAmerican(text){
        let regex = /\d\d:\d\d/
        let match = text.match(regex);
        if(match){text = text.replace(match[0], '<span class="highlight">'+match[0].split('.').join(':')+'</span>');}
         for (let x in americanToBritishSpelling){
         regex = new RegExp(americanToBritishSpelling[x], 'gi');
         match= text.match(regex);
         if(match){text = text.replace(match, '<span class="highlight">'+x+'</span>')}
         }
         for (let x in britishOnly){
              regex = new RegExp('\\b'+x+'\\b', 'gi');
              match= text.match(regex);
              if(match){text = text.replace(match, '<span class="highlight">'+britishOnly[x]+'</span>')}
              }
              for (let x in americanToBritishTitles){
                    regex = new RegExp('\\b'+americanToBritishTitles[x]+'\\b', 'gi');
                    match= text.match(regex);
                    if(match==americanToBritishTitles[x]){
                      text = text.replace(match, '<span class="highlight">'+x+'</span>')}
                    }
        return text.trim();
      }
}

module.exports = Translator;
