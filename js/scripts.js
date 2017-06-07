$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    if(sentence.match(/\d/)) { alert('number'); }
    var result = translate(sentence);
    $("#result").text(result);
  });
});

//BACK END
var translate = function(sentence) {
  var finalSentence = [];
  var wordArray = sentence.split(" ");
  wordArray.forEach(function(word) {
    var letterArray = word.split("");
    console.log(letterArray[0]);
    if (letterArray[0].match(/[aeiou]/i)) {
      console.log("here");
      var newWord = letterArray.concat("way");
      var newWord1 = newWord.join('');
      finalSentence.push(newWord1);
      return;
    }

    for (var i = 0; i < letterArray.length; i++) {

      if(letterArray[i] === "q") {
        if(letterArray[i+1] === "u") {
          var removed = letterArray.splice(0, i + 2);
          var firstHalf = letterArray.join('');
          var secondHalf = removed.join('');
          var finalWord = firstHalf.concat(secondHalf);
          finalSentence.push(finalWord);
          return;
        }
      } else if (letterArray[i].match(/[aeiou]/i)) {
        var removed = letterArray.splice(0, i);
        var firstHalf = letterArray.join('');
        var secondHalf = removed.join('');
        var finalWord = firstHalf.concat(secondHalf);
        var finalWord2 = finalWord.concat("ay");
        finalSentence.push(finalWord2);
        return;
      }
    }
  });
  return finalSentence.join(' ');
};
