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
            alert("It's a tie!");
        }
        else if(choice2=='paper')
        {
            alert('You lost! Paper beats rock!');
            j++;
        }
        else {
            alert("You win! Rock beats scissors!");
            i++;
        }
    }
    if(choice1=='paper')
    {
        if(choice2=='paper')
        {
            alert("It's a tie!");
        }
        else if(choice2=='scissors')
        {
            alert('You lost! Scissors beats paper!');
            j++;
            
        }
        else {
            alert("You win! Paper beats rock!");
            i++;
        }
    }
    if(choice1=='scissors')
    {
        if(choice2=='scissors')
        {
            alert("It's a tie!");
        }
        else if(choice2=='rock')
        {
            alert('You lost! Rock beats scissors!');
            j++;
           
        }
        else {
            alert("You win! Scissors beats paper!");
            i++;
          
        }
    }

}

function game(){
    let computerChoice;
    let playerChoice;
    for(let z=0;z<5;z++){
        computerChoice=getComputerChoice();
        playerChoice=prompt("What's your choice?");
        let result= playerChoice.toLowerCase();    
        singleRound(result,computerChoice);
    }
 
}

game();
alert(i+ ' - ' + j);