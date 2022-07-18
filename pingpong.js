
const pOne = document.querySelector('#pOne');
const pTwo = document.querySelector('#pTwo');
const reset = document.querySelector('#reset');
const scorePlayerOne = document.querySelector('#playerOne');
const scorePlayerTwo = document.querySelector('#playerTwo');
let goalSelect = document.querySelector('#goalSelect');


let pOneScore = 0;
pOne.addEventListener('click', function (evtOne) {
    pOneScore++
    scorePlayerOne.innerText = `${pOneScore}`;

    if (pOneScore == goalSelect.value) {
        scorePlayerOne.style.color = 'green';
        scorePlayerTwo.style.color = 'red';
        pOne.disabled = true;
        pTwo.disabled = true;
    } else {
        scorePlayerOne.style.color = 'black';
        scorePlayerTwo.style.color = 'black';
    }
})

let pTwoScore = 0;
pTwo.addEventListener('click', function (evtTwo) {
    pTwoScore++
    scorePlayerTwo.innerText = `${pTwoScore}`;

    if (pTwoScore == goalSelect.value) {
        scorePlayerOne.style.color = 'red';
        scorePlayerTwo.style.color = 'green';
        pOne.disabled = true;
        pTwo.disabled = true;
    } else {
        scorePlayerOne.style.color = 'black';
        scorePlayerTwo.style.color = 'black';
    }
})

reset.addEventListener('click', evtReset);

goalSelect.addEventListener('change', evtReset);


function evtReset() {
    pOneScore = 0
    pTwoScore = 0
    scorePlayerOne.innerText = `${pOneScore}`;
    scorePlayerTwo.innerText = `${pTwoScore}`;
    scorePlayerOne.style.color = 'black';
    scorePlayerTwo.style.color = 'black';
    pOne.disabled = false;
    pTwo.disabled = false;
}



