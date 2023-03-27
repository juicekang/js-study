'use strict';

const carrotGame = document.querySelector('#carrotGame');
const btnStart = document.querySelector('.btn-play');
const timerSec = document.querySelector('.game-timer span');
const counter = document.querySelector('.catch-count');
const gameArea = document.querySelector('.game-area');
const gameModal = document.querySelector('.modal-game-end');
const btnReplay = document.querySelector('.btn-replay');
const gameStatus = document.querySelector('.modal-game-end .status');
let timeSec = timerSec.textContent;
let timer;
let carrotNum;
let bugNum;

// 게임 시작 

btnStart.addEventListener('click', e => {
    if (carrotGame.classList.contains('game-start')) {
        gameStatus.textContent = 'Replay?';
        gameEnd();
    } else {
        console.log('start');
        gameStart();
        
    }
});

gameArea.addEventListener('click', e => {
    if (e.target.className === 'carrot') {
        e.target.remove();
        if (carrotNum === 1) {
            counter.textContent = '0';
            gameStatus.textContent = 'You Win!🎉';
            gameEnd();
            return false;
        } else {
            counter.innerHTML = --carrotNum;
            
        }
    } else if (e.target.className === 'bug') {
        gameStatus.textContent = 'Replay?';
        gameEnd();
    } else return false;
});

btnReplay.addEventListener('click', () => {
    gameStart();
    gameModal.style.display = 'none';
});

function gameStart(){
    carrotGame.classList.add('game-start');
    btnStart.textContent = '■';
    gameArea.innerHTML = '';
    carrotNum = Math.floor(Math.random() * 10 + 5);
    bugNum = Math.floor(Math.random() * 10 + 5);
    carrotSet('carrot', carrotNum);
    carrotSet('bug', bugNum);
    console.log(carrotNum, bugNum);
    counter.innerHTML = carrotNum;
    timeSec = '30';
    timerStart();
}

function carrotSet(clsName, nmb){
    let numArr = [];
    for (let i = 0; i < nmb; i++) {
        const obj = document.createElement('div');
        obj.setAttribute('class', clsName);
        numArr[i] = [Math.random() * 100, Math.random() * 100];
        obj.style.left = `${numArr[i][0]}%`
        obj.style.top = `${numArr[i][1]}%`
        gameArea.appendChild(obj);
    }
}

function timerStart(){
    timerSec.textContent = '30';
    timer = setInterval(function(){
        timeSec--;
        timerSec.textContent = timeSec;
        if (timeSec < 10) {
            timerSec.textContent = `0${timeSec}`
            if(timeSec === 0) {
                console.log('end');
                gameStatus.textContent = 'Replay?';
                gameEnd();
            }
        } 
    }, 1000)
}


function gameEnd(){
    clearInterval(timer);
    carrotGame.classList.remove('game-start');
    btnStart.textContent = '▶';
    gameModal.style.display = 'block';
    timeSec = '00';
}