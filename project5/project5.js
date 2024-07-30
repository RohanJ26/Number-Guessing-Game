let RandomNumber=parseInt(Math.random()*100 +1)
let input=document.querySelector("#input")
const buttons=document.querySelector(".form")
let playgame=true
let chances=1
const end=document.querySelector("#end")
const remark=document.querySelector("#remark")
const guess=document.querySelector("#guess")
let remain=document.querySelector("#remain")
const final=document.querySelector(".final")
const sub_button=document.querySelector("#sub")

function ValidateGuess(input){
    if(input==='' || isNaN(input)){
        alert("Please enter a valid number")
    }
    else if(input<1){
        alert("Number should be more than 1")
    }
    else if(input>100){
        alert("Number should be less than 100")
    }
    else{
        if(chances===10){
            end.innerHTML=`Game Over !! Correct answer was ${RandomNumber}`
            EndGame()
        }
        else{
            CheckAns(input)
        }
    }
}

function CheckAns(input){
    if(input>RandomNumber){
        remark.innerHTML="Your answer is more than correct answer"
        guess.innerHTML+=`${input},`
        remain.innerHTML=`${10-chances}`
        chances++;
        buttons.reset()
    }
    else if(input<RandomNumber){
        remark.innerHTML="Your answer is less than correct answer"
        guess.innerHTML+=`${input},`
        remain.innerHTML=`${10-chances}`
        chances++;
        buttons.reset()
    }
    else{
        remark.innerHTML="Correct Answer!!"
        EndGame()
    }
}

function EndGame(){
    playgame=false
    input.setAttribute('disabled','')
    sub_button.setAttribute('disabled','')
    StartGame()
}

function StartGame(){
    const StartButton=document.createElement('button')
    StartButton.style.cssText=`
        padding: 5px;
        width: fit-content;
        background-color: black;
        color: white;
        border-radius: 5px;
        border: solid black 2px;
        margin-top: 9px;
    `;
    StartButton.innerHTML="Play Again"
    StartButton.addEventListener('click',function(e){
        e.preventDefault()
        playgame=true
        chances=1
        guess.innerHTML=""
        remain.innerHTML="10"
        remark.innerHTML=""
        end.innerHTML=""
        RandomNumber=parseInt(Math.random()*100 +1)
        input.removeAttribute('disabled','')
        sub_button.removeAttribute('disabled','')
        buttons.reset()
    })
    final.appendChild(StartButton)
    StartButton.addEventListener('click',function(e){
        final.removeChild(StartButton)
    })
}

if(playgame){
    buttons.addEventListener('submit',function(e){
        e.preventDefault()
        let userinput=Number.parseInt(input.value)
        ValidateGuess(userinput)
    })
}