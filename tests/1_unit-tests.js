const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator;

suite('Unit Tests', () => {
    test('#equal, #Translate Mangoes are my favorite fruit. to British English.', function () {
        assert.equal('Mangoes are my <span class="highlight">favourite</span> fruit.', translator.convertToBritish('Mangoes are my favorite fruit.'));
      });
      test('#equal, #Translate I ate yogurt for breakfast. to British English.', function () {
        assert.equal('I ate <span class="highlight">yoghurt</span> for breakfast.', translator.convertToBritish('I ate yogurt for breakfast.'));
      });
      test('#equal, #Translate We had a party at my friend\'s condo. to British English', function () {
        assert.equal('We had a party at my friend\'s <span class="highlight">flat</span>.', translator.convertToBritish('We had a party at my friend\'s condo.'));
      });
      test('#equal, #Translate Can you toss this in the trashcan for me? to British English', function () {
        assert.equal('Can you toss this in the <span class="highlight">bin</span> for me?', translator.convertToBritish('Can you toss this in the trashcan for me?'));
      });
      test('#equal, #Translate The parking lot was full. to British English', function () {
        assert.equal('The <span class="highlight">car park</span> was full.', translator.convertToBritish('The parking lot was full.'));
      });
      test('#equal, #Translate Like a high tech Rube Goldberg machine. to British English', function () {
        assert.equal('Like a high tech <span class="highlight">Heath Robinson device</span>.', translator.convertToBritish('Like a high tech Rube Goldberg machine.'));
      });
      test('#equal, #Translate To play hooky means to skip class or work. to British English', function () {
        assert.equal('To <span class="highlight">bunk off</span> means to skip class or work.', translator.convertToBritish('To play hooky means to skip class or work.'));
      });
      test('#equal, #Translate No Mr. Bond, I expect you to die. to British English', function () {
        assert.equal('No <span class="highlight">Mr</span> Bond, I expect you to die.', translator.convertToBritish('No Mr. Bond, I expect you to die.'));
      });
      test('#equal, #Translate Dr. Grosh will see you now. to British English', function () {
        assert.equal('<span class="highlight">Dr</span> Grosh will see you now.', translator.convertToBritish('Dr. Grosh will see you now.'));
      });
      test('#equal, #Translate Lunch is at 12:15 today. to British English', function () {
        assert.equal('Lunch is at <span class="highlight">12.15</span> today.', translator.convertToBritish('Lunch is at 12:15 today.'));
      });
});
