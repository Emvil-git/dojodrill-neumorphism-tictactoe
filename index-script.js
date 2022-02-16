let turnCounter = 0;
let xPoints = 0;
let oPoints = 0;
let victory = false;
let draw = false;

document.querySelector('#cell1').addEventListener('click', function(event){
    let cellPId = this.children[0].id;
    console.log(cellPId);
    cellClick(cellPId);
    checkWin();
});

document.querySelector('#cell2').addEventListener('click', function(event){
    let cellPId = this.children[0].id;
    console.log(cellPId);
    cellClick(cellPId);
    checkWin();
});

document.querySelector('#cell3').addEventListener('click', function(event){
    let cellPId = this.children[0].id;
    console.log(cellPId);
    cellClick(cellPId);
    checkWin();
});

document.querySelector('#cell4').addEventListener('click', function(event){
    let cellPId = this.children[0].id;
    console.log(cellPId);
    cellClick(cellPId);
    checkWin();
});

document.querySelector('#cell5').addEventListener('click', function(event){
    let cellPId = this.children[0].id;
    console.log(cellPId);
    cellClick(cellPId);
    checkWin();
});

document.querySelector('#cell6').addEventListener('click', function(event){
    let cellPId = this.children[0].id;
    console.log(cellPId);
    cellClick(cellPId);
    checkWin();
});

document.querySelector('#cell7').addEventListener('click', function(event){
    let cellPId = this.children[0].id;
    console.log(cellPId);
    cellClick(cellPId);
    checkWin();
});

document.querySelector('#cell8').addEventListener('click', function(event){
    let cellPId = this.children[0].id;
    console.log(cellPId);
    cellClick(cellPId);
    checkWin();
});

document.querySelector('#cell9').addEventListener('click', function(event){
    let cellPId = this.children[0].id;
    console.log(cellPId);
    cellClick(cellPId);
    checkWin();
});

document.querySelector('#reset-btn').addEventListener('click', function(event){
    document.getElementById("o-score").innerHTML = "0";
    document.getElementById("x-score").innerHTML = "0";
    clearBoard();
    turnCounter = 0;
    xPoints = 0;
    oPoints = 0;
    victory = false;
    console.log('reset btn clicked');
});

function cellClick(cellId) {
    /*working part */
    if (document.getElementById(cellId).innerHTML == " ") {
        if (turnCounter % 2 == 0 || turnCounter == 0) {
            document.getElementById(cellId).innerHTML = "X";
        }else{
            document.getElementById(cellId).innerHTML = "O";
        }
        turnCounter++; 
    }else{
    }
    console.log('board clicked');
  }

function checkWin(){
    if(turnCounter > 4){
        let contents = [];
        for (let i = 0; i < 9; i++) {
            contents.push(document.getElementsByClassName('game-icon')[i].innerHTML);
          }
        console.log(contents)
        if (((contents[0]===contents[1] && contents[1]===contents[2]) && contents[1] !== " ") ||
        ((contents[3]===contents[4] && contents[4]===contents[5]) && contents[4] !== " ") ||
        ((contents[6]===contents[7] && contents[7]===contents[8]) && contents[7] !== " ") ||
        ((contents[0]===contents[3] && contents[3]===contents[6]) && contents[3] !== " ") ||
        ((contents[1]===contents[4] && contents[4]===contents[7]) && contents[4] !== " ") ||
        ((contents[2]===contents[5] && contents[5]===contents[8]) && contents[5] !== " ") ||
        ((contents[0]===contents[4] && contents[4]===contents[8]) && contents[4] !== " ") ||
        ((contents[2]===contents[4] && contents[4]===contents[6]) && contents[4] !== " ")){
                console.log('win');
                if(turnCounter % 2 == 0){
                    oPoints ++;
                    document.getElementById("o-score").innerHTML = oPoints.toString();
                    console.log('O win');
                    victory = true;
                }else{
                    xPoints ++;
                    document.getElementById("x-score").innerHTML = xPoints.toString();
                    console.log('X win');
                    victory = true;
                }
            winCard();
            }else{
                if(turnCounter > 8){
                    draw = true;
                    winCard();
                }else{}
            }
    }else{}
    contents = [];
    console.log(turnCounter);
}

function winCard(){
    if(victory = true || draw == true){
        gameDiv = document.getElementById('game-div');
        gameDiv.classList.add("blurred");

        winDiv = document.getElementById('win-card-div');
        winDiv.classList.remove("hidden");
        
        if(draw == true){
            document.getElementById("winner").innerHTML = "DRAW";
        }else if (turnCounter % 2 == 0) {
            document.getElementById("winner").innerHTML = "O WINS";
        }else{
            document.getElementById("winner").innerHTML = "X WINS";
        }

        document.querySelector('#win-card-div').addEventListener('click', function(event){
            gameDiv.classList.remove("blurred");
            winDiv.classList.add("hidden");
            clearBoard();
        });

    }else{}
}

function clearBoard(){
    document.getElementById("cell1-icon").innerHTML = " ";
    document.getElementById("cell2-icon").innerHTML = " ";
    document.getElementById("cell3-icon").innerHTML = " ";
    document.getElementById("cell4-icon").innerHTML = " ";
    document.getElementById("cell5-icon").innerHTML = " ";
    document.getElementById("cell6-icon").innerHTML = " ";
    document.getElementById("cell7-icon").innerHTML = " ";
    document.getElementById("cell8-icon").innerHTML = " ";
    document.getElementById("cell9-icon").innerHTML = " ";
    turnCounter = 0;
    victory = false;
    draw = false;
}