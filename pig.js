'use strict';
const scoree0= document.getElementById('score--0');
const scoree1=document.getElementById('score--1');
const dice=document.querySelector('.dice');
const current0=document.getElementById('current--0');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

let currentscore,score,activeplayer,playing;

const init= function(){
currentscore=0;
score=[0,0];             //for score0 and score1 text contents
activeplayer=0;
playing=true;

scoree0.textContent="0";
scoree1.textContent="0";

player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
player0.classList.remove('player--active');
player1.classList.remove('player--active');
player0.classList.add('player--active');
playing=true;
}

init();   //initialize all variables and starting conditions

dice.classList.add("hidden");

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(playing){
    let num= Math.trunc(Math.random()*6)+1;
    dice.src=`dice-${num}.png`;
    dice.classList.remove("hidden");
    currentscore +=num;
    document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    
    if(num===1){

        currentscore=0;
        document.getElementById(`current--${activeplayer}`).textContent=0;
        activeplayer=activeplayer===0?1:0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    } 
}
});
document.querySelector('.btn--hold').addEventListener('click',function(){
    if(playing){
    score[activeplayer]+=currentscore;
    if( score[activeplayer]>=100){
        document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        playing=false;
        dice.classList.add("hidden");
    }
    document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer];
    currentscore=0;
    document.getElementById(`current--${activeplayer}`).textContent=0;
    activeplayer=activeplayer===0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
    //current0.textContent=0;
    //currentscore=0;


});
document.querySelector('.btn--new').addEventListener('click',init);