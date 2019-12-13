//Parameter file
class ParamTest{
static function testParameter(state,report,userid){
var neco = userid + ': svet za dvojteckou';
Spell.Save (state, report, 'heroName', neco);
Spell.LoadParameter (report, 'heroName', 'Possible Value 1');
Spell.LoadParameter (report, 'heroName', 'Possible Value 2');
}
}
