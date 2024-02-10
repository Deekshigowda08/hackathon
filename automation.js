 var sentenceElement = document.getElementById("sentence");
  var words = sentenceElement.innerText.split(' ');
  sentenceElement.innerText = ' ';
  words.forEach(function (word, index) {
    setTimeout(function () {
      sentenceElement.innerText += ` ${word}`;
    }, 150 * index)
  })