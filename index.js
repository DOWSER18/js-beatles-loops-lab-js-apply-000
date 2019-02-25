var MusInstr =""
function theBeatlesPlay (musicians, instruments){
for (var i = -1; i < musicians.length; i++) {
  MusInstr= (musicians[i] + " plays " + instruments[i]);
}
return MusInstr;

}
