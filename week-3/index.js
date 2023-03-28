// Import the TeamManager from the TeamManager.js file
import { TeamManager } from "./team-manager.js";


// Gets a an array of team objects from the team-manager.js file.
let teams = TeamManager.getTeams();

// Displays the contents of the teams array.
console.log('-- DISPLAYING TEAMS --');
for (let team of teams) {
    console.log(TeamManager.displayTeam(team));
}

// Creates a variable named spurs and calls the findTeam() function. 
let bulls = TeamManager.getTeam('Chicago Bulls');
console.log(TeamManager.displayTeam(bulls));

// Creates a variable named spurs and calls the findTeam() function. 
let spurs = TeamManager.getTeam('San Antonio Spurs');
console.log(TeamManager.displayTeam(spurs));
