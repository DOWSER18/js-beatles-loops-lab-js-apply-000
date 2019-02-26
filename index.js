var MusInstr =[]
function theBeatlesPlay (musicians, instruments){
for (var i = 0; i < musicians.length; i++) {
  MusInstr.push(musicians[i] + " plays " + instruments[i]);
}
return MusInstr;
}

function johnLennonFacts(arrayJLFacts) {
  var i = 0
    while (i < arrayJLFacts.length) {
      arrayJLFacts[i] += '!!!';
      i++;
  }
  return arrayJLFacts;
}
