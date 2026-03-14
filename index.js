let homeScoresEl = document.getElementById("home-scores-el")
let awayScoresEl = document.getElementById("away-scores-el")

let homeScore = 0
let awayScore = 0


// FOR HOME TEAM
function addHomeScore(points){
    homeScore += points
    homeScoresEl.textContent = homeScore   
    winnerHighlight()
}

// FOR AWAY TEAM
function addAwayScore(points){
    awayScore += points
    awayScoresEl.textContent = awayScore    
    winnerHighlight()
}


// TO HIGHLIGHT THE WINNER

function winnerHighlight(){
    if (homeScore > awayScore){
        homeScoresEl.style.color = "#3dff33"
        awayScoresEl.style.color = "#ff3c5d"

    } else if (homeScore < awayScore){
        awayScoresEl.style.color = "#3dff33"
        homeScoresEl.style.color = "#ff3c5d"
        
    } else{
        awayScoresEl.style.color = "#ff3c5d"
        homeScoresEl.style.color = "#ff3c5d"
        console.log("Draw")
    }
    
}


// TO START NEW GAME

function newGame(){
    awayScore = awayScore - awayScore
    awayScoresEl.textContent = awayScore
    awayScoresEl.style.color = "#ff3c5d"
    
    homeScore = homeScore - homeScore
    homeScoresEl.textContent = homeScore   
    homeScoresEl.style.color = "#ff3c5d" 
    
    periodCount = 0
    periodEl.textContent = periodCount
}

// FOR PERIOD

let periodCount = 0
let periodEl = document.getElementById("period-el")

function addPeriod(){
    periodCount += 1
    periodEl.textContent = periodCount

    if(periodCount >= 4){
        periodCount = 0
    }else{
        periodCount = periodCount
    }
}



// COUNTDOWN TIMER

// function startTimer(duration, display) {
//     let timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     let fiveMinutes = 60 * 5,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };

// console.log(fiveMinutes)