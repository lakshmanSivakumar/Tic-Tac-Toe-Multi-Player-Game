var line = document.getElementsByClassName('line')[0];

var r1 = document.getElementsByClassName('r1')[0];
var r2 = document.getElementsByClassName('r2')[0];
var r3 = document.getElementsByClassName('r3')[0];

var c1 = document.getElementsByClassName('c1')[0];
var c2 = document.getElementsByClassName('c2')[0];
var c3 = document.getElementsByClassName('c3')[0];

var d1 = document.getElementsByClassName('d1')[0];
var d2 = document.getElementsByClassName('d2')[0];

var inputs = document.querySelectorAll('.board #t1');

var r1c1 = document.querySelectorAll('#r1c1 #t2')[0];
var r1c2 = document.querySelectorAll('#r1c2 #t2')[0];
var r1c3 = document.querySelectorAll('#r1c3 #t2')[0];

var r2c1 = document.querySelectorAll('#r2c1 #t2')[0];
var r2c2 = document.querySelectorAll('#r2c2 #t2')[0];
var r2c3 = document.querySelectorAll('#r2c3 #t2')[0];

var r3c1 = document.querySelectorAll('#r3c1 #t2')[0];
var r3c2 = document.querySelectorAll('#r3c2 #t2')[0];
var r3c3 = document.querySelectorAll('#r3c3 #t2')[0];

var inputArray = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3];

var title = document.getElementsByClassName('title')[0];
var choose = document.getElementsByClassName('choose')[0];
var wrapper = document.getElementsByClassName('wrapper')[0];
var xWins = document.getElementsByClassName('x-wins')[0];
var oWins = document.getElementsByClassName('o-wins')[0];
var draw = document.getElementsByClassName('draw')[0];

var player1, player2, positionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9], flag = 0, result, count=0;
var hoveredPositionArray = positionArray;

function player(option) {
    
    player1 = option;

    if (option == 'X') {
        player2 = 'O';
    }
    if (option == 'O') {
        player2 = 'X';
    }

    choose.style.display = 'hidden';

    let msg2 = `Player 1 - ${player1} \u00A0 Player 2 - ${player2}`;

    choose.innerHTML = `<div>${msg2}</div>`;
    wrapper.style.display = 'grid';
}

function checkGameStatus() {
    if ((r1c1.innerHTML == 'X' && r1c2.innerHTML == 'X' && r1c3.innerHTML == 'X' && (result = r1)) ||
        (r2c1.innerHTML == 'X' && r2c2.innerHTML == 'X' && r2c3.innerHTML == 'X' && (result = r2)) ||
        (r3c1.innerHTML == 'X' && r3c2.innerHTML == 'X' && r3c3.innerHTML == 'X' && (result = r3)) ||
        (r1c1.innerHTML == 'X' && r2c1.innerHTML == 'X' && r3c1.innerHTML == 'X' && (result = c1)) ||
        (r1c2.innerHTML == 'X' && r2c2.innerHTML == 'X' && r3c2.innerHTML == 'X' && (result = c2)) ||
        (r1c3.innerHTML == 'X' && r2c3.innerHTML == 'X' && r3c3.innerHTML == 'X' && (result = c3)) ||
        (r1c1.innerHTML == 'X' && r2c2.innerHTML == 'X' && r3c3.innerHTML == 'X' && (result = d1)) ||
        (r1c3.innerHTML == 'X' && r2c2.innerHTML == 'X' && r3c1.innerHTML == 'X' && (result = d2))) {
        title.style.display = 'none';
        choose.style.display = 'none';
        flag = 1;
        line.style.display = 'block';
        result.style.visibility = 'visible';
        setTimeout(function () {
            xWins.style.display = 'block';
        }, 1500);
        positionArray = [];
    }
    else if (
        r1c1.innerHTML == 'O' && r1c2.innerHTML == 'O' && r1c3.innerHTML == 'O' && (result = r1) ||
        r2c1.innerHTML == 'O' && r2c2.innerHTML == 'O' && r2c3.innerHTML == 'O' && (result = r2) ||
        r3c1.innerHTML == 'O' && r3c2.innerHTML == 'O' && r3c3.innerHTML == 'O' && (result = r3) ||
        r1c1.innerHTML == 'O' && r2c1.innerHTML == 'O' && r3c1.innerHTML == 'O' && (result = c1) ||
        r1c2.innerHTML == 'O' && r2c2.innerHTML == 'O' && r3c2.innerHTML == 'O' && (result = c2) ||
        r1c3.innerHTML == 'O' && r2c3.innerHTML == 'O' && r3c3.innerHTML == 'O' && (result = c3) ||
        r1c1.innerHTML == 'O' && r2c2.innerHTML == 'O' && r3c3.innerHTML == 'O' && (result = d1) ||
        r1c3.innerHTML == 'O' && r2c2.innerHTML == 'O' && r3c1.innerHTML == 'O' && (result = d2)) {
        title.style.display = 'none';
        choose.style.display = 'none';
        flag = 1;
        line.style.display = 'block';
        result.style.visibility = 'visible';
        setTimeout(function () {
            oWins.style.display = 'block';
        }, 1500);
        positionArray = [];
    }
    else if (
        r1c1.innerHTML && r1c2.innerHTML && r1c3.innerHTML &&
        r2c1.innerHTML && r2c2.innerHTML && r2c3.innerHTML &&
        r3c1.innerHTML && r3c2.innerHTML && r3c3.innerHTML && flag == 0) {
        title.style.display = 'none';
        choose.style.display = 'none';
        draw.style.display = 'block';
        positionArray = [];
    }
}

function checkXO(t, count) {
    if(count%2 != 0)
    {
        t.innerHTML = player1;
    }
    else
    {
        t.innerHTML = player2; 
    }
    checkGameStatus();
}

function game(clickedPostion) {
    inputs[clickedPostion - 1].innerHTML = '';
    count++;
    if (positionArray.includes(clickedPostion)) {
        positionArray = positionArray.filter(function (value) {
            return clickedPostion != value;
        });
        hoveredPositionArray = hoveredPositionArray.filter(function (value) {
            return clickedPostion != value;
        });
        if (clickedPostion == 1)
            checkXO(r1c1, count);
        else if (clickedPostion == 2)
            checkXO(r1c2, count);
        else if (clickedPostion == 3)
            checkXO(r1c3, count);
        else if (clickedPostion == 4)
            checkXO(r2c1, count);
        else if (clickedPostion == 5)
            checkXO(r2c2, count);
        else if (clickedPostion == 6)
            checkXO(r2c3, count);
        else if (clickedPostion == 7)
            checkXO(r3c1, count);
        else if (clickedPostion == 8)
            checkXO(r3c2, count);
        else if (clickedPostion == 9)
            checkXO(r3c3, count);
    }
}

function show(hoveredPosition) {
    if(hoveredPositionArray.includes(hoveredPosition))
    {
        if((count+1)%2 != 0)
            inputs[hoveredPosition - 1].innerHTML = player1;
        else
            inputs[hoveredPosition - 1].innerHTML = player2;
    }
}

function hide(hoveredPosition) {
    inputs[hoveredPosition - 1].innerHTML = '';
}