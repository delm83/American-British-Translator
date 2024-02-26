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

      test('#equal, #Translate We watched the footie match for a while. to American English', function () {
        assert.equal('We watched the <span class="highlight">soccer</span> match for a while.', translator.convertToAmerican('We watched the footie match for a while.'));
      });
      test('#equal, #Translate Paracetamol takes up to an hour to work. to American English', function () {
        assert.equal('<span class="highlight">Tylenol</span> takes up to an hour to work.', translator.convertToAmerican('Paracetamol takes up to an hour to work.'));
      });
      test('#equal, #Translate First, caramelise the onions. to American English', function () {
        assert.equal('First, <span class="highlight">caramelize</span> the onions.', translator.convertToAmerican('First, caramelise the onions.'));
      });
      test('#equal, #Translate I spent the bank holiday at the funfair. to American English', function () {
        assert.equal('I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.', translator.convertToAmerican('I spent the bank holiday at the funfair.'));
      });
      test('#equal, #Translate I had a bicky then went to the chippy. to American English', function () {
        assert.equal('I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.', translator.convertToAmerican('I had a bicky then went to the chippy.'));
      });
      test('#equal, #Translate I\'ve just got bits and bobs in my bum bag. to American English', function () {
        assert.equal('I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.', translator.convertToAmerican('I\'ve just got bits and bobs in my bum bag.'));
      });
      test('#equal, #Translate The car boot sale at Boxted Airfield was called off. to American English', function () {
        assert.equal('The <span class="highlight">swap meet</span> at Boxted Airfield was called off.', translator.convertToAmerican('The car boot sale at Boxted Airfield was called off.'));
      });
      test('#equal, #Translate Have you met Mrs Kalyani? to American English', function () {
        assert.equal('Have you met <span class="highlight">Mrs.</span> Kalyani?', translator.convertToAmerican('Have you met Mrs Kalyani?'));
      });
      test('#equal, #Translate Prof Joyner of King\'s College, London. to American English', function () {
        assert.equal('<span class="highlight">Prof.</span> Joyner of King\'s College, London.', translator.convertToAmerican('Prof Joyner of King\'s College, London.'));
      });
      test('#equal, #Translate Tea time is usually around 4 or 4.30. to American English', function () {
        assert.equal('Tea time is usually around 4 or <span class="highlight">4:30</span>.', translator.convertToAmerican('Tea time is usually around 4 or 4.30.'));
      });
      test('#equal, #Highlight translation in Mangoes are my favorite fruit.', function () {
        assert.equal('Tea time is usually around 4 or <span class="highlight">4:30</span>.', translator.convertToAmerican('Tea time is usually around 4 or 4.30.'));
      });
      test('String, #include, #Highlight translation in Mangoes are my favorite fruit.', function () {
        assert.include(translator.convertToBritish('Mangoes are my favorite fruit.'), '<span class="highlight">favourite</span>');
      });
      test('String, #include, #Highlight translation in I ate yogurt for breakfast.', function () {
        assert.include(translator.convertToBritish('I ate yogurt for breakfast.'), '<span class="highlight">yoghurt</span>');
      });
      test('String, #include, #Highlight translation in We watched the footie match for a while.', function () {
        assert.include(translator.convertToAmerican('We watched the footie match for a while.'), '<span class="highlight">soccer</span>');
      });
      test('String, #include, #Highlight translation in Paracetamol takes up to an hour to work.', function () {
        assert.include(translator.convertToAmerican('Paracetamol takes up to an hour to work.'), '<span class="highlight">Tylenol</span>');
      });
});
