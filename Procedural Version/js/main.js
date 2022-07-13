let turn = "X"
let turnNumber = 0
let grid = [
    ['','',''],
    ['','',''],
    ['','',''],
]

document.querySelector('#player-turn').innerText = turn

document.querySelectorAll('button').forEach(button => button.addEventListener('click', markTile))

function markTile(event) {
    
    //Marks the Tile with Current Player's Mark
    console.log(event.target)
    event.target.innerText = turn
    event.target.disabled = true //disables the target, which in this case is the button
    let row = event.target.dataset.row
    let column = event.target.dataset.column  //Lines 20-22 are linking your buttons to your object
    grid[row][column] = turn
    console.log(grid)
    
    //Checks if that Current Player won with that Current Move
    //VICTORY CONDITIONS
    //Row 1
    if (grid[0][0] == turn && grid[0][1] == turn && grid[0][2] == turn) {
        document.querySelectorAll('button').forEach(button => button.disabled = true)
        gameOver("Game Over!",`Player ${turn} wins!`)
        alert(`Player ${turn} wins!`)
        return
        //Row 2
    }else if (grid[1][0] == turn && grid[1][1] == turn && grid[1][2] == turn) {
        document.querySelectorAll('button').forEach(button => button.disabled = true)
        gameOver("Game Over!",`Player ${turn} wins!`)
        alert(`Player ${turn} wins!`)
        return
        //Row 3
    }else if (grid[2][0] == turn && grid[2][1] == turn && grid[2][2] == turn) {
        document.querySelectorAll('button').forEach(button => button.disabled = true)
        gameOver("Game Over!",`Player ${turn} wins!`)
        alert(`Player ${turn} wins!`)
        return
        //Column 1
    }else if (grid[0][0] == turn && grid[1][0] == turn && grid[2][0] == turn) {
        document.querySelectorAll('button').forEach(button => button.disabled = true)
        gameOver("Game Over!",`Player ${turn} wins!`)
        alert(`Player ${turn} wins!`)
        return
        //Column 2
    }else if (grid[0][1] == turn && grid[1][1] == turn && grid[2][1] == turn) {
        document.querySelectorAll('button').forEach(button => button.disabled = true)
        gameOver("Game Over!",`Player ${turn} wins!`)
        alert(`Player ${turn} wins!`)
        return
        //Column 3
    }else if (grid[0][2] == turn && grid[1][2] == turn && grid[2][2] == turn) {
        document.querySelectorAll('button').forEach(button => button.disabled = true)
        gameOver("Game Over!",`Player ${turn} wins!`)
        alert(`Player ${turn} wins!`)
        return
        //Diagonal 1
    }else if (grid[0][0] == turn && grid[1][1] == turn && grid[2][2] == turn) {
        document.querySelectorAll('button').forEach(button => button.disabled = true)
        gameOver("Game Over!",`Player ${turn} wins!`)
        alert(`Player ${turn} wins!`)
        return
        //Diagonal 2
    }else if (grid[2][0] == turn && grid[1][1] == turn && grid[0][2] == turn) {
        document.querySelectorAll('button').forEach(button => button.disabled = true)
        gameOver("Game Over!",`Player ${turn} wins!`)
        alert(`Player ${turn} wins!`)
        return
    }
    // turn = "O" //don't have to use let because turn is already defined (we are just changing the value now)
    
    //Switches Player
    //The return statements after each victory condition will prevent this following code from happening if a win condition is met.
    turnNumber += 1
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X"
    }

    document.querySelector('#player-turn').innerText = turn
    
    //TIE CONDITIONS
    if (turnNumber == 9) {
        gameOver("Game Over!","Nobody Wins!")
        alert("Game Over, Nobody Wins!");
    }
}

function gameOver(gameMessage,player) {
    document.querySelector('h2').innerText = gameMessage
    document.querySelector('#player-turn').innerText = player
}

//Object syntax = DON'T FORGET YOUR COMMAS!