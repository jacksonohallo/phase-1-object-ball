let gameObject = {
    home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
            'Alan Anderson': {
                number: '0',
                shoe: '16',
                points: '22',
                rebounds: '12',
                assists: '12',
                steals: '3',
                blocks: '1',
                slamDunks: '1'
            },
            'Reggie Evans': {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            'Brook Lopez': {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            'Mason Plumlee': {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            'Jason Terry': {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    },
    away: {
        teamName: 'Charlotte Hornets',
        colors: 'Turquise Purple',
        players: {
            'Jeff_Adrien': {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            'Ben Gordon': {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            'Brendan Haywood': {
                number: 3,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }

        }

    }
}
// debugger

// - Build a function, `numPointsScored` that takes in an argument of a player's

function numPointsScored(playerInput) {
    const game = gameObject
    for (const gameKey in game) {//iterate through game keys home, away
        const teamObj = game[gameKey]
        debugger;
        for (const teamKey in teamObj);
        const playerObj = teamObj.players
        debugger
        for (const playerKey in playerObj) {
            if (playerKey === playerInput) {
                return playerObj[playerKey].points
            }
        }
    }
}


console.log(numPointsScored('Brendan Haywood'))

// Build a function, `shoeSize`, that takes in an argument of a player's name and return size
function shoeSize(playerInput) {
    const game = gameObject
    for (const gameKey in game) {//iterate through game keys home, away
        const teamObj = game[gameKey]
        for (const teamKey in teamObj) {
            const playerObj = teamObj.players
            for (const playerKey in playerObj) {
                if (playerKey === playerInput) {
                    return playerObj[playerKey].shoe
                }
            }
        }
    }

}
console.log(shoeSize('Brendan Haywood'))

function teamColors(teamName) {
    const game = gameObject
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const team = teamObj.teamName
        const teamColors = teamObj.colors
        if (teamName === team) {
            return teamColors
        }
    }
}

console.log(teamColors('Charlotte Hornets'))

function teamNames() {
    const game = gameObject
    const team = []
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const teams = teamObj.teamName
        team.push(`teams are ${teams}`)
    }
    return team
}
console.log(teamNames())

function playerNumbers(name) {
    const game = gameObject
    let jerseyNoArray = []
    for (const key in game) {
        if (game[key].teamName === name) {
            for (const player in game[key].players) {
                jerseyNoArray.push(game[key].players[player].number)

            }
        }
    }
    return jerseyNoArray
}

console.log(playerNumbers('Charlotte Hornets'))

function playerStats(playerName) {
    const game = gameObject
    let playerStatsObject = {}
    for (let key in game) {
        for (const player in game[key].players) {
            if (player === playerName) {
                playerStatsObject = game[key].players[player]
            }
        }
    }
    return playerStatsObject
}
console.log(playerStats('Ben Gordon'))

// - Then, return that player's number of rebounds

function bigshoeRebounds() {
    const game = gameObject
    let largestShoeSize = 0;
    let bigShoeRebounds = {}
    for (let key in game) {
        for (const player in game[key].players) {
            if (game[key].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[key].players[player].shoe;
                bigShoeRebounds = game[key].players[player];
            }
        }
    }
    return (` largest ${bigShoeRebounds.rebounds}`)
}

console.log(bigshoeRebounds())


//  Which player has the most points? Call the function `mostPointsScored`.

function mostPointsScored() {
 let playerWithHighestPoints={}
 let highestPoints =0
 for (const key in gameObject) {
    for (const player in gameObject[key].players) {
      if (gameObject[key].players[player].points > highestPoints) {
        highestPoints = gameObject[key].players[player].points;
        playerWithHighestPoints = {};
        playerWithHighestPoints[player] = gameObject[key].players[player];
      }
    }
  }

  return playerWithHighestPoints;
};

console.log(mostPointsScored())

// Which team has the most points? Call the function `winningTeam`.

function winningTeam() {
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    for (const key in gameObject) {
      if (key === "away") {
        for (const player in gameObject[key].players) {
            awayTeamPoints += gameObject[key].players[player].points;

        }
      } else if (key === "home") {
        for (const player in gameObject[key].players) {
            homeTeamPoints += gameObject[key].players[player].points;

        }
      }
    }
  
    return `
    Winning Team - ${
      homeTeamPoints > awayTeamPoints
        ? gameObject["home"].teamName
        : gameObject["away"].teamName
    }
    Points - ${homeTeamPoints > awayTeamPoints ? homeTeamPoints : awayTeamPoints}
    `;
  };
console.log(winningTeam())


// Which player has the longest name? Call the function `playerWithLongestName`.

function playerWithLongestName(){
    let playerName = "";
    let sizeOfLongestName = 0;
    for (const key in gameObject) {
      for (const player in gameObject[key].players) {
        if (player.length > sizeOfLongestName) {
          sizeOfLongestName = player.length;
          playerName = player;
        }
      }
    }
  
    return playerName;
  };

console.log(playerWithLongestName())
// Write a function that returns true if the player with the longest name had the most steals
function doesLongNameStealATon  (){
    const nameOfPlayerWithLongestName = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = "";
    for (const key in gameObject) {
      for (const player in gameObject[key].players) {
        if (gameObject[key].players[player].steals > mostSteals) {
          mostSteals = gameObject[key].players[player].steals;
          playerWithMostSteals = player;
        }
      }
    }
    return playerWithMostSteals === nameOfPlayerWithLongestName;
  };
  
  console.log(doesLongNameStealATon());