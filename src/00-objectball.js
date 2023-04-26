// Build a function called gameObject that contains and returns nested objects.

function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": { 
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            },

        },
    } 
}
//console.log(gameObject())

// variables for the object returned by the gameObject function, all teams and all players
let obj = gameObject()
let homeTeam = gameObject().home
let awayTeam = gameObject().away
let allPlayers = {...homeTeam.players, ...awayTeam.players}

// Build a function, numPointsScored, that takes in an argument of a 
// player's name and returns the number of points scored for that player.

function numPointsScored(playerName) {
    for(let team in obj) {
            for(let player in obj[team].players) { 
                if(player === playerName) {
                    return obj[team].players[player].points
                } 
            }    
    } 
}
//console.log(numPointsScored('Jeff Adrien'))

// Build a function, shoeSize, that takes in an argument of a player's name and returns 
// the shoe size for that player.

function shoeSize(playerName) {
    for (let player in allPlayers) {
        if(player === playerName) {
            return allPlayers[player].shoe
        } 
    }
}
//console.log(shoeSize('Jeff Adrien'))

// Build a function, teamColors, that takes in an argument of the team 
// name and returns an array of that teams colors.

function teamColors(teamName) {
    if (teamName === homeTeam.teamName) {
        return homeTeam.colors
        }
    else if(teamName === awayTeam.teamName) {
        return awayTeam.colors
    }
}
//console.log(teamColors('Charlotte Hornets'))

// Build a function, teamNames, that operates on the game object to return
//  an array of the team names.

function teamNames() {
    return [homeTeam.teamName, awayTeam.teamName]
}
//console.log(teamNames())

// Build a function, playerNumbers, that takes in an argument of a 
// team name and returns an array of the jersey numbers for that team.
// This function is similar to teamColors, but needs to loop through the team's players.

function playerNumbers(teamName){
    let numbersArray = [];
    for(let team in obj) {
        if (obj[team].teamName === teamName) {
            for (let player in obj[team].players){
                numbersArray.push(obj[team].players[player].number);
            }
        }
    }
    return numbersArray;
}
//console.log(playerNumbers('Charlotte Hornets'))

// Build a function, playerStats, that takes in an argument of a player's name and 
// returns an object of that player's stats.

function playerStats(player) {
    for(let playerObj in allPlayers) {
        if(playerObj === player) {
            return allPlayers[player]
        }
    }
}
//console.log(playerStats('Jeff Adrien'))

// Build a function, bigShoeRebounds, that will return the number of rebounds associated
//  with the player that has the largest shoe size. Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
// Remember to think about return values here. Use debugger to drop into your function and
//  understand what it is returning and why.

function playerWithLargest(attribute){
    let thePlayer = "";
    let max = 0;
    for(let key in obj) {
        for(let player in obj[key].players) {
            if(obj[key].players[player][attribute]>max) {
                thePlayer = player;
                max = obj[key].players[player][attribute];
            }
        }
    }
    return thePlayer;
}
//console.log(playerWithLargest('shoe'))

function bigShoeRebounds(){
    let bigShoePlayer = playerWithLargest('shoe');
    for(let key in obj) {
        for(let player in obj[key].players) {
            if(player === bigShoePlayer) {
                return obj[key].players[player].rebounds;
            }
        }
    }
}
//console.log(bigShoeRebounds())

//Which player has the most points? Call the function mostPointsScored.

function mostPointsScored() {
    return playerWithLargest('points');
} 
//console.log(mostPointsScored())

// Which team has the most points? Call the function winningTeam

function winningTeam(){
    let team = "";
    let max = 0;
    for (let key in obj){
        let total = 0;
        for (let player in obj[key].players){
            total+=obj[key].players[player].points;
        }
        if (total>max){
            team = obj[key].teamName
        }
    }
    return team;
}
//console.log(winningTeam())

// Which player has the longest name? Call the function playerWithLongestName

function playerWithLongestName(){
    let thePlayer = ""
    let max = 0;
    for(let key in obj) {
        for(let player in obj[key].players) {
            if(player.length>max) {
                thePlayer = player
                max = player.length;
            }
        }
    }
    return thePlayer;
}
console.log(playerWithLongestName())

// Write a function that returns true if the player with the longest 
// name had the most steals. Call the function doesLongNameStealATon.

function doesLongNameStealATon(){
    let player = playerWithLongestName();
    let playerwithmoststeals = playerWithLargest('steals');
    return player == playerwithmoststeals
}
//console.log(doesLongNameStealATon())

function doesLongNameStealATon(){
    if(playerWithLongestName() === playerWithLargest('steals')) {
        return playerWithLongestName() === playerWithLargest('steals')
    }
}
//console.log(doesLongNameStealATon())

