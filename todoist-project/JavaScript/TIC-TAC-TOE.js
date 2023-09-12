const board = document.getElementById("board");
    const winnerdiv = document.getElementById("winner");
    let currentPlayer = "X";
    let boardState = ["", "", "", "", "", "", "", "", ""];
    
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
    
      cell.addEventListener("click", function(){
        makeMove(cell,i);
      });
      board.appendChild(cell);
    }

    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];

   
    function makeMove(cell, index) {
        if (cell.textContent =="" && winnerdiv.textContent === "") {
            cell.textContent = currentPlayer; 
            boardState[index] = currentPlayer;

            if (checkWinner(currentPlayer)) {
                winnerdiv.textContent = "Player " + currentPlayer + " wins";
            } else if (!boardState.includes("")) {
                winnerdiv.textContent = "It's a draw";
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    
  
    function checkWinner(player) {
        for(let i=0; i<winPatterns.length; i++)
        {
             const pattern = winPatterns[i];
             let patternOccupied = true;
             for(let j=0; j<pattern.length; j++)
             {
                const cellindex = pattern[j];

                if(boardState[cellindex]!==player)
                {
                    patternOccupied = false;
                    break;
                }


             }
             if(patternOccupied)
             {
                return true;
             }
        }
        return false;
    }
