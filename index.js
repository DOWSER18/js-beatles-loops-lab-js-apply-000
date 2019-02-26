
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

function iLoveTheBeatles (n){
  var ArraryBeatlesLove =[];
  var i = 0
    do {ArraryBeatlesLove.push ("I love the beatles!");
        i++;

    } while (i < n && n <15);
return ArraryBeatlesLove
}
