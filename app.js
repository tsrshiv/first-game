const CONSTANTS = {
    HEIGHT: 560,
    WIDTH: 560,
    CELL_SIZE: 20,
    LAYOUT: [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
      ],
    CELL_TYPE: {
        WALL: 'wall',
        PILL: 'pill',
    }
};

const GRID = [];

let score = 0;

let currentPacmanIndex = 490;


function createGrid() {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < CONSTANTS.LAYOUT.length; i++) {
        const cell = document.createElement('div');
        GRID.push(cell);

        if (CONSTANTS.LAYOUT[i] === 0) {
            GRID[i].classList.add(CONSTANTS.CELL_TYPE.PILL)
        } else if (CONSTANTS.LAYOUT[i] === 1) {
            GRID[i].classList.add(CONSTANTS.CELL_TYPE.WALL)
        }

        grid.appendChild(cell);

    }
}

function eatFood() {
    if (GRID[currentPacmanIndex].classList.contains('pill')) {
        GRID[currentPacmanIndex].classList.remove('pill')
        document.querySelector("#score").innerHTML = `${++score}`
    }
}

function movePacman(e) {
    let newIndex;
    const pacman = document.querySelector('.pacman');
    switch (e.keyCode) {
        case 37:
            newIndex = currentPacmanIndex - 1;
            break;
        case 38:
            newIndex = currentPacmanIndex - CONSTANTS.WIDTH/CONSTANTS.CELL_SIZE;
            break;
        case 39:
            newIndex = currentPacmanIndex + 1;
            break;
        case 40:
            newIndex = currentPacmanIndex + CONSTANTS.WIDTH/CONSTANTS.CELL_SIZE;
            break;
    
        default:
            return;
    }

    if (GRID[newIndex].classList.contains('wall')) {
        return;
    }

    GRID[currentPacmanIndex].classList.remove('pacman')
    GRID[newIndex].classList.add('pacman')

    currentPacmanIndex = newIndex;

    eatFood();
    checkGameOver();
}

class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.timerId = NaN
    }

    addToGrid() {
        GRID[this.startIndex].classList.add('ghost')
        GRID[this.currentIndex].classList.add(this.className)
        GRID[this.currentIndex].innerHTML = '👻'
    }
}

const ghosts = [
    new Ghost('blinky', 29, 200),
    new Ghost('pinky', 376, 200),
    new Ghost('inky', 351, 200),
    new Ghost('clyde', 557, 200)
]


function moveGhost(ghost) {
    ghost.timerId = setInterval(function() {
        let directions = [-1,+1,CONSTANTS.WIDTH/CONSTANTS.CELL_SIZE, -CONSTANTS.WIDTH/CONSTANTS.CELL_SIZE];
        let dir = directions[Math.floor(Math.random() * directions.length)];

        if(
            !GRID[ghost.currentIndex + dir].classList.contains('wall')
        ) {
            GRID[ghost.currentIndex].classList.remove('ghost')
            GRID[ghost.currentIndex].classList.remove(ghost.className)
            GRID[ghost.currentIndex ].innerHTML = ''
            
            ghost.currentIndex += dir;

            GRID[ghost.currentIndex].classList.add(ghost.className)
            GRID[ghost.currentIndex].classList.add('ghost')
            GRID[ghost.currentIndex].innerHTML = '👻'
        }

        checkGameOver();

        
    }, ghost.speed);
}

function checkGameOver() {
    if (GRID[currentPacmanIndex].classList.contains('ghost')) {
        document.removeEventListener('keyup', movePacman);
        ghosts.forEach(ghost => {
            clearInterval(ghost.timerId)
        });

        alert(`Game Over... Score: ${score}`)
    }

    if (score == 238) {
        document.removeEventListener('keyup', movePacman);
        ghosts.forEach(ghost => {
            clearInterval(ghost.timerId)
        });

        alert('Level complete')
    }


}

function initGame() {
    createGrid();
    GRID[currentPacmanIndex].classList.add('pacman')
    document.addEventListener('keyup', movePacman);
    ghosts.forEach(ghost => {
        ghost.addToGrid();
        moveGhost(ghost)
    });

   

}

initGame();