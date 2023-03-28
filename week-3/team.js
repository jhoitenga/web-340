// Creating a class named Team with properties for name, mascot, and playerCount
class Team {
    constructor(name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

// Exporting the class using Node’s module system. 
module.exports = Team;