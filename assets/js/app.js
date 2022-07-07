// set initial counter
let userCounter = 0;
let computerCounter = 0;

// get DOM elements
let userScore       = document.getElementById('user-score');
let computerScore   = document.getElementById('computer-score');
let result          = document.querySelector('.result > h2');
let rockChoice      = document.getElementById('rock');
let paperChoice     = document.getElementById('paper');
let scissorsChoice  = document.getElementById('scissors');

let btn             = document.getElementById('btn');

// button's events
rockChoice      .addEventListener('click', ()=> game('Rock'));
paperChoice     .addEventListener('click', ()=> game('Paper'));
scissorsChoice  .addEventListener('click', ()=> game('Scissors'));

// reset button
btn.addEventListener('click', ()=>{
    userCounter = 0
    computerCounter = 0
    userScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    result.innerHTML = `Make your move!`
})

// win function
function win(userChoice, computerChoice){
    userCounter++;
    userScore.innerHTML = userCounter
    result.innerHTML = `<span class="text-primary">${userChoice}</span> beats <span class="text-warning">${computerChoice}</span>. You <span class="text-success">win!</span> &#128513`;
};

// lose function
function lose(userChoice, computerChoice){
    computerCounter++
    computerScore.innerHTML = computerCounter
    result.innerHTML = `<span class="text-warning">${computerChoice}</span> beats <span class="text-primary">${userChoice}</span>. You <span class="text-danger">lose!</span> &#128557`;
}

// draw function
function draw(userChoice, computerChoice){
    result.innerHTML = `<span class="text-primary">${userChoice}</span> is equal to <span class="text-warning">${computerChoice}</span>. It's <span class="text-info">draw!</span> &#128528`;
}

// computer choice
function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

// user choice
function game(userChoice) {
    let computerChoice = getComputerChoice();
    // condition for choices
    switch(userChoice + computerChoice){
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice);
            break;
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            lose(userChoice, computerChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(userChoice, computerChoice);
            break;
    }
}

