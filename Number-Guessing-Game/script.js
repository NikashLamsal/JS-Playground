let input = document.getElementById("inp-box");
let msg = document.getElementById("message");
let checkbutton = document.getElementById("checkbutton")
let restart = document.getElementById("restart")
let timer = document.getElementById("timer")

let sn = Math.floor(Math.random()*20) + 1 ;
let guesscount = 5;
let timeleft = 30;
let timeinterval ;
let timerstarted = false;


function starttimer()
{
timeinterval = setInterval(() => {
    timeleft--
    timer.textContent = `⏳ Time left: ${timeleft}s`;

    if(timeleft <= 0)
    {
        clearInterval(timeinterval);
        msg.textContent = `⏰ Time's up! You lost. The number was ${sn} `;
        checkbutton.disabled = true;
        checkbutton.style.display = "none";
        restart.style.display = "inline";
    }
}, 1000

)};




checkbutton.addEventListener("click",function() 
{
    if(!timerstarted){
    starttimer();
    timerstarted = true;
    }

    let guess = input.value.trim();
    
    if(guess == "")
    {
        msg.textContent = "❗ Please Guess the number first !!!";
        msg.style.display = "block";
        setTimeout(() => 
        {
            msg.style.display = "none";
        },3000);
        return;
    }
    
    if(guess == sn)
    {
        msg.textContent = "🎉 Congrats! You guessed it !"
        checkbutton.disabled = true;
        restart.style.display = "inline";
        checkbutton.style.display = "none";
        clearInterval(timeinterval)
    }
    else if (guess > sn )
    {
        guesscount--;
        msg.textContent = "📉 Too High ! " + guesscount + " guesses left.";

    }
    else if (guess < sn)
    {
        guesscount--;
        msg.textContent = "📈 Too Low " + guesscount + " guesses left."
    }

    if (guesscount == 0 && guess !== sn)
    {
        msg.textContent = " Game Over! The number was " + sn ;
        checkbutton.disabled = true;
        restart.style.display = "inline";
        checkbutton.style.display = "none";
        clearInterval(timeinterval);

    }
    input.value = "";
});

restart.addEventListener("click",function()
{
    input.value = "";
    msg.textContent = "";
    sn = Math.floor(Math.random()*10)+1;
    guesscount = 5;
    checkbutton.disabled = false;
    restart.style.display ="none";
    checkbutton.style.display = "inline";
    clearInterval(timeinterval);
    timeleft = 30;
    timer.textContent = `⏳ Time left: ${timeleft}s`;
    starttimer();
    timerstarted = false;
});

