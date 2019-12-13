class Spell{

  static function Save (state, report, param_name, value) {

		var a : ParameterValueResponse = new ParameterValueResponse();
		a.StringKeyValue = value;

		/*var lbls : LanguageTextCollection = new LanguageTextCollection();
		lbls.Add(new LanguageText(report.CurrentLanguage, value));
		a.LocalizedLabel = new Label(lbls);*/
    		a.StringValue = value;
		state.Parameters[param_name] = a;

	}

  static function GetParamCode (state, parameter_name)
{
  if (state.Parameters.IsNull(parameter_name))
    return null;

  var pvr : ParameterValueResponse = state.Parameters[parameter_name];

  return pvr.StringKeyValue;
}


// Summary:
  // LoadParameter is used to add possible values to a string response parameter.
  //
  // Parameter inputs:
  //   * report - The Reportal scripting report object
  //   * parameter - The parameter the possible values will be added to
  //   * parameter_values - An array of objects with a property Code and a property Label.
  //        Example: [{Code: "1", Label: "Answer 1"}, {Code: "2", Label: "Answer 2"}]
  // Returns:
  //   * Nothing returned

   static function LoadParameter (report, parameter, value)
  {
      var a : ParameterValueResponse = new ParameterValueResponse();
            a.StringKeyValue = value;
            a.StringValue = value + "Label";
      parameter.Items.Add(a);
    }
  }
