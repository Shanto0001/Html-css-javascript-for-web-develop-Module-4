(function (window) {
    var names = ["SHANTO", "John", "Jen", "Jason", "Paul", "appu", "Larry", "Paula", "Laura", "Jim"];
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })(window);