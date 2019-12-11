class Spell{

  static function LoadParameter (report, parameter, parameter_values)
  {
    for (var i=0; i<parameter_values.length; ++i)
    {
      var a : ParameterValueResponse = new ParameterValueResponse();
      var code = (parameter_values[i].Code == null) ? parameter_values[i].Label : parameter_values[i].Code;
      a.StringKeyValue = code;
      a.StringValue = parameter_values[i].Label;
      parameter.Items.Add(a);
    }
  }

  static function SaveParameter (state, report, param_name, key, value) {
		var a : ParameterValueResponse = new ParameterValueResponse();
		a.StringKeyValue = key;
		a.StringValue = value;
		state.Parameters[param_name] = a;
	}

}
