'use strict';


let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const displaymsg=function(messege)
{
    document.querySelector('.msg').textContent=messege;
};

document.querySelector('.check').addEventListener('click',function()
{
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(!guess){
        displaymsg('no number');
    }
    else if(guess===secretnumber)
    {
        displaymsg("correc tnumber");
        document.querySelector(".number").textContent=secretnumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
    
    if(score > highscore)
    {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
    }
    //when guess id wrong
    else if(guess !== secretnumber){
    if(score > 1)
    {
       displaymsg(guess > secretnumber ? 'too high':'too low');
     // document.querySelector('.msg').textContent= guess > secretnumber ? 'to high' : 'to low';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        displayMessege("you lost the game!");
        document.querySelector('.score').textContent=0;
    }
}

});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretnumber=Math.trunc(Math.random()*20)+1;
    displaymsg("start guessing --");
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})