var MusInstr =[]
function theBeatlesPlay (musicians, instruments){
for (var i = 0; i < musicians.length; i++) {
  MusInstr.push(musicians[i] + " plays " + instruments[i]);
}
return MusInstr;
}

function johnLennonFacts (){
  let facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];
  var ExclamationFacts = [];
  var n = 0;
    while (n < facts.length) {
      ExclamationFacts.push(facts[n] +"!!!") n++;
}
return ExclamationFacts
}
