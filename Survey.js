//Survey
class SurveyLoader{

  private var user;
  private var record;
  private const store_survey_id = 'p3094191875';
  private var store;
  private var report;
  private var team;

  function SurveyLoader(_wrapper){

    this.report = _wrapper.report;
    this.user = _wrapper.user;
    this.store = HayGroup.ReportUtil.Persistence.DataStores[this.store_survey_id];
    this.store.ValidInterval = 0;

    this.team = _wrapper.toGet;
    this.record = this.store[this.user.UserId];
  }

  function GetTeam(){
    for (var i = 1; i <= 50; i++){
      if (this.record['team_erik' + this.user.UserId])
        return this.record['team_erik' + this.user];

        if (this.record['team_filip' + this.user.UserId])
          return this.record['team_filip' + this.user.UserId];
    }
  }
}
