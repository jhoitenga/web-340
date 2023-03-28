// Import the Team from team.js file
//import { Team } from "./team.js";
const Team = require('./team.js');

// Creating an array of five Team objects and assigning it to a variable named teams
let Teams = [
    new Team ("Chicago Bulls", "Benny the Bull", "17"),
    new Team ("San Antonio Spurs", "Coyote", "17"),
    new Team ("Los Angeles Lakers", "Dancing Barry", "17"),
    new Team ("Boston Celtics", "Lucky the Leprechaun", "17"),
    new Team ("Indiana Pacers", "Boomer", "17")
];

// Creating a function named getTeams and return the array of Team objects
module.exports.getTeams = function() {
    return Teams;
}

// Creating a getTeam function with a single parameter for name, return the Team object with that name
module.exports.getTeam = function(name) {
    for (let team of Teams) {
        if (team.name === name) {
            return team
        }
    }
}

// Creating a displayTeam function with a single parameter for a team object and return a string with the team name, mascot and player count
module.exports.displayTeam = function(team) {
    return "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayer Count: " + team.playerCount + "\n";
}


