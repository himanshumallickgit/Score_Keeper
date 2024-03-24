const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const resetButton = document.querySelector('#reset');
const winningScoreButton = document.querySelector('#playto');
let p1S = 0;
let isGameOver = false;
p1Button.addEventListener('click',function(){
    if(!isGameOver){
        p1S += 1;
        if(winningScore === p1S){
            isGameOver = true;
            p1Score.classList.add('winner');
            p2Score.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        }
        p1Score.textContent = p1S;
})
let p2S = 0;
p2Button.addEventListener('click',function(){
    if(!isGameOver){
        p2S += 1;
        if(winningScore === p2S){
            isGameOver = true;
            p2Score.classList.add('winner');
            p1Score.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Score.textContent = p2S;
    }
    
})
winningScoreButton.addEventListener('change',function(){
    winningScore = parseInt(this.value)
    reset();
})
resetButton.addEventListener('click', reset);
function reset(){
    isGameOver = false;
    p1S = 0;
    p2S = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove('has-text-success', 'has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}