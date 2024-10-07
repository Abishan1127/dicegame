let score1 = 0;
let score2 = 0;
const winningScore = 20;  

document.getElementById('rollDice').addEventListener('click', function () {
    
    if (score1 >= winningScore || score2 >= winningScore) {
        return;
    }

    
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    
    score1 += dice1;
    score2 += dice2;

   
    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;
    document.getElementById('score1').textContent = `Score: ${score1}`;
    document.getElementById('score2').textContent = `Score: ${score2}`;

    
    if (score1 >= winningScore) {
        alert('Player 1 Wins!');
    } else if (score2 >= winningScore) {
        alert('Player 2 Wins!');
    }
});

document.getElementById('resetGame').addEventListener('click', function () {
    
    score1 = 0;
    score2 = 0;

    
    document.getElementById('dice1').textContent = '0';
    document.getElementById('dice2').textContent = '0';
    document.getElementById('score1').textContent = `Score: ${score1}`;
    document.getElementById('score2').textContent = `Score: ${score2}`;
});
