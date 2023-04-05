function calculateDolphinAvgScore(dolphineScoreArray){

    let total = dolphineScoreArray.reduce(function(a, b){
        return a + b;
      });
    return total/dolphineScoreArray.length
}

function calculateKoalaAvgScore(koalaAvgArray){
    let total = koalaAvgArray.reduce(function(a, b){
        return a + b;
      });
    return total/koalaAvgArray.length
}



function compareScores(dolphinTeamScore,koalaTeamScore){



    if(dolphinTeamScore > koalaTeamScore){
        if(validWin(dolphinTeamScore,koalaTeamScore)){
            return "Dolphin Team Wins"
        }
        else{
            return "Not a valid win"
        }
    }
    else if(koalaTeamScore > dolphinTeamScore){
        if(validWin(koalaTeamScore,dolphinTeamScore)){

            return "Koala Team Wins"
        }
        else{
            return "Not a valid win"
        }
    }
    else if(koalaTeamScore>=100 && dolphinTeamScore>=100 && koalaTeamScore===dolphinTeamScore){
        return "It's A Draw!"
    }
    else{
        return "Minimum requirements not met, no one wins the trophy"
    }

}

function validWin(teamScore,opponentScore){
    

    if(teamScore>=100 &&( teamScore-opponentScore>=100)){
       return true
    }
    else{
       return false
    }

   
}




console.log(compareScores(calculateDolphinAvgScore([20,20,20]),calculateKoalaAvgScore([20,20,20])))