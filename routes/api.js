'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let translation = '';
      let text ='';
      text = req.body.text;
      let locale = req.body.locale;
      if(text=='') return res.json({error: 'No text to translate'});
      if(!locale||!text) return res.json({error: 'Required field(s) missing'});
      if(locale!='american-to-british'&&locale!='british-to-american') return res.json({error: 'Invalid value for locale field'});
      if(locale=='american-to-british') {
        translation = translator.convertToBritish(text);
        if(text == translation){
          translation = "Everything looks good to me!"}
        return res.json({text: text, translation: translation});   }   
      if(locale == 'british-to-american') {
        translation = translator.convertToAmerican(text);
        if(text == translation){
          translation = "Everything looks good to me!"}
        return res.json({text: text, translation: translation});  
      }
      });
};