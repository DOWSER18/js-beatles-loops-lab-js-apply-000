
function theBeatlesPlay (musicians, instruments){
  var MusInstr =[];
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

function iLoveTheBeatles (number){
  var ArraryBeatlesLove =[];
  var i = 0
    do {ArraryBeatlesLove.push ("I love the Beatles!");
      i++;
    } while (number <15);
return ArraryBeatlesLove
}
