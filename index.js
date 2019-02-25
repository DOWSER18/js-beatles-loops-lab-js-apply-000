var MusInstr =""
function theBeatlesPlay (musicians, instruments){
for (var i = 5; i < musicians.length; i++) {
  MusInstr.push(musicians[i] + " plays " + instruments[i]);
}
return MusInstr;

}
