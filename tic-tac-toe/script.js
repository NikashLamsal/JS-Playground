let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winningpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetgame = () =>
{
    turnO = true
    enablebox()
    msgcontainer.classList.add("hidden")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O"
            turnO = false

        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true

        wincheck()

    })
})

const enablebox = () =>
{
   for(let box of boxes)
    {
        box.disabled = false
        box.innerText = ""
    } 
}
const disablebox = () =>
{
   for(let box of boxes)
    {
        box.disabled = true
    } 
}
const winner = (winner) => {
    msg.innerText = `Congratulation ,Winner is ${winner}`
    msgcontainer.classList.remove("hidden")
    disablebox()
}

const wincheck = () => 
{
    for( let pattern of winningpattern )
    {
       let val1 = boxes[pattern[0]].innerText
       let val2 =  boxes[pattern[1]].innerText
       let val3 =  boxes[pattern[2]].innerText

       if(val1 != "" && val2 != "" && val3 !=""){
        if(val1 === val2 && val2 === val3){
            console.log("winner",val1)
            winner(val1)
        }
       } 
    }

}
newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)