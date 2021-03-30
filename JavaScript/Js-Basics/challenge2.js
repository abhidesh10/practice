let johnTeamScore = (89 + 120 + 103);
let mikeTeamScore = (116 + 123 + 94);

let johnTeamAvg = (johnTeamScore / 3);
let mikeTeamAvg = (mikeTeamScore / 3);

if (johnTeamAvg === mikeTeamAvg) {
    console.log('It\'s draw, average score is: ', johnTeamAvg);
} else if (johnTeamAvg > mikeTeamAvg) {
    console.log('JohnTeam win the match with avg score of ',johnTeamAvg);
} else {
    console.log('mikeTeam win the match with avg score of ',mikeTeamAvg);
}