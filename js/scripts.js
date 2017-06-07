$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    if(isNumeric(sentence)) { alert('number'); }
    var result = translate(sentence);
    $("#result").text(result);
  });
});

//BACK END
var translate = function(word) {

  var letterArray = word.split("");
  if (letterArray[0] === "a" || letterArray[0] === "e" || letterArray[0] === "i" || letterArray[0] === "o" || letterArray[0] === "u") {
    var newWord = letterArray.concat("way");
    return newWord.join('');
  }

  for (var i = 0; i < letterArray.length; i++) {

    if(letterArray[i] === "q") {
      if(letterArray[i+1] === "u") {
        var removed = letterArray.splice(0, i + 2);
        var firstHalf = letterArray.join('');
        var secondHalf = removed.join('');
        return firstHalf.concat(secondHalf);
      }
    } else if (letterArray[i] === "a" || letterArray[i] === "e" || letterArray[i] === "i" || letterArray[i] === "o" || letterArray[i] === "u") {
      var removed = letterArray.splice(0, i);
      var firstHalf = letterArray.join('');
      var secondHalf = removed.join('');
      var finalWord = firstHalf.concat(secondHalf);
      return finalWord.concat("ay");
    }
  }
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
