//Parameter file
class ParamTest{
static function testParameter(state,report,userid){
var neco = userid + ': svet za dvojteckou';
Spell.SaveParameter (state, report, 'heroName', userid, neco);
}
}
//static function SaveParameter (state, report, param_name, key, value) {
