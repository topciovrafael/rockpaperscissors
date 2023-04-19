function getComputerChoice(){
    let x= Math.ceil(Math.random()*3);
    let choice;
    console.log(x);
    if(x==1)
    {
        choice="rock";
    }
    else if(x==2)
    {
        choice="paper";
    }
    else
    {
        choice="scissors";
    }
    return choice;
}
let i=0;
let j=0;

function singleRound(choice1,choice2){
    if(choice1=='rock')
    {
        if(choice2=='rock')
        {
            document.getElementById("alegere").innerHTML = "Computer chose rock!";
            document.getElementById("mesaj").innerHTML = "It's a tie!";
            console.log("It's a tie!");
        }
        else if(choice2=='paper')
        {
            document.getElementById("alegere").innerHTML = "Computer chose paper!";
            document.getElementById("mesaj").innerHTML = 'You lost! Paper beats rock!';
            console.log('You lost! Paper beats rock!');
            j++;
        }
        else {
            document.getElementById("alegere").innerHTML = "Computer chose scissors!";
            document.getElementById("mesaj").innerHTML = 'You win! Rock beats scissors!';
            console.log("You win! Rock beats scissors!");
            i++;
        }
    }
    if(choice1=='paper')
    {
        if(choice2=='paper')
        {
            document.getElementById("alegere").innerHTML = "Computer chose paper!";
            document.getElementById("mesaj").innerHTML = "It's a tie!";
            console.log("It's a tie!");
        }
        else if(choice2=='scissors')
        {
            document.getElementById("alegere").innerHTML = "Computer chose scissors!";
            document.getElementById("mesaj").innerHTML = 'You lost! Scissors beats paper!';
            console.log('You lost! Scissors beats paper!');
            j++;
            
        }
        else {
            document.getElementById("alegere").innerHTML = "Computer chose rock!";
            document.getElementById("mesaj").innerHTML = 'You win! Paper beats rock!';
            console.log("You win! Paper beats rock!");
            i++;
        }
    }
    if(choice1=='scissors')
    {
        if(choice2=='scissors')
        {
            document.getElementById("alegere").innerHTML = "Computer chose scissors!";
            document.getElementById("mesaj").innerHTML = "It's a tie!";
            console.log("It's a tie!");
        }
        else if(choice2=='rock')
        {
            document.getElementById("alegere").innerHTML = "Computer chose rock!";
            document.getElementById("mesaj").innerHTML = 'You lost! Rock beats scissors!';
            console.log('You lost! Rock beats scissors!');
            j++;
           
        }
        else {
            document.getElementById("alegere").innerHTML = "Computer chose paper!";
            document.getElementById("mesaj").innerHTML = "You win! Scissors beats paper!";
            console.log("You win! Scissors beats paper!");
            i++;
          
        }
    }

}


function choose(choice){
    console.log(choice);
    let playerChoice=choice;
    let computerChoice=getComputerChoice();
    singleRound(playerChoice,computerChoice);
    document.getElementById("score").innerHTML ='YOU  ' + i + ' - ' + j+'  BOT';
    if(i<5 || j<5)
    {
        document.getElementById("final").innerHTML = "";
        document.getElementById("final2").innerHTML = "";
    }
    if(j==5 || i==5){
        document.getElementById("final").innerHTML = "The game has been finished!";
        document.getElementById("final2").innerHTML = "To start another game, simply press one of the three buttons :)";
        i=0;
        j=0;
    }
}