import { Team } from './Team';
export class Match{

    readonly DECISION_BATTING =1;
    readonly DECISION_BaLLING =2;
     
     private team1Name:String;
     private team2Name:String;

     private toss:String;
     private decision:number;
     private overs:number;

     private team1:Team;
     private team2:Team;
   
      setTeamNames(team1:String,team2:String)
      {
       
        this.team1Name = team1;
        this.team2Name = team2;
        console.log(this.team1Name);
        console.log(this.team2Name);
        this.team1 = new Team();
        this.team2 = new Team();
      }

      getTeam1Name(){
        return this.team1Name;
      }

      getTeam2Name(){
        return this.team2Name;
      }

      setToss(tossWon:String,decision:number):Boolean
      {
        this.toss = tossWon;
        this.decision = decision;
        return true;
      }

      setTeams(team1:Team,team2:Team)
      {
        this.team1 = team1;
        this.team2 = team2;
      }

      getTeams()
      {
        return this.team1,this.team2;
      }
      getTeam1(){
        return this.team1;
      }

      getTeam2(){
        return this.team2;
      }

      setOvers(overs:number)
      {
        this.overs = overs;
      }

      getToss():String{
        return this.toss;
      }

      getDecision():number{
        return this.decision;
      }

      getOvers():number{
        return this.overs;
      }

      getBattingTeam(){
        if(this.toss==this.team1Name && this.decision==this.DECISION_BATTING)
        {
          return this.team1;
        }
        else{
          return this.team2;
        }
      }
        
      getBallingTeam(){
        if(this.toss==this.team1Name && this.decision==this.DECISION_BaLLING)
        {
          return this.team1;
        }
        else{
          return this.team2;
        }
      }

}