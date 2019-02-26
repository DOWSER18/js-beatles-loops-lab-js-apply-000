var MusInstr =[]
function theBeatlesPlay (musicians, instruments){
for (var i = 0; i < musicians.length; i++) {
  MusInstr.push(musicians[i] + " plays " + instruments[i]);
}
return MusInstr;
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

