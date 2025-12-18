let userscore = 0
let computerscore = 0
let gameover = false

function play(userchoice){
    if(gameover) return 

    const choices = ['rock', 'paper', 'scissors']
    const computerchoice = choices[Math.floor(Math.random() * 3)]

    document.getElementById('user-choice').textContent = "You chose " + userchoice
    document.getElementById("computer-choice").textContent = "Computer chose" + computerchoice

    let result = ""
    if (userchoice === computerchoice){
        result = "It's a draw!"
    }
    else if ((userchoice === 'rock' && computerchoice === 'scissors') || 
             (userchoice === 'paper' && computerchoice === 'rock') || 
             (userchoice === 'scissors' && computerchoice === 'paper'))
             {
        result = "You win this round!"
        userscore++
             }
    else {
        result = "Computer Wins this round !"
        computerscore++
    }

    document.getElementById('result').textContent = result
    document.getElementById('user-score').textContent = userscore
    document.getElementById('computer-score').textContent = computerscore

    if (userscore === 5 || computerscore === 5){
        gameover = true
     
    const winnertext = userscore === 5 ? "🎉 You won the game!" : "😢 Computer won the game!"
    document.getElementById("final-winner").textContent = winnertext

    }
}

function resetGame(){
    userscore = 0
    computerscore = 0
    gameover = false

    document.getElementById('user-choice').textContent = ""
    document.getElementById('computer-choice').textContent = ""
    document.getElementById('user-score').textContent = "0"
    document.getElementById('computer-score').textContent = "0"
    document.getElementById('result').textcontent = ""
    document.getElementById('final-winner').textContent = ""
}
