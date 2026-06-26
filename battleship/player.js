import Gameboard from "./gameboard";


class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.board = new Gameboard();
    this.moves = new Set();

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.moves.add(`${i},${j}`);
      }
    }
  }

  attack(enemyBoard, x, y) {
   

      enemyBoard.receiveAttack(x, y);
      
    
  }

  computerMove(enemyBoard) {
    let arr = [...this.moves];

    let randomMove =
      arr[Math.floor(Math.random() * arr.length)];
        this.moves.delete(randomMove);
    let [x, y] = randomMove.split(",");

    this.attack(enemyBoard, Number(x), Number(y));
  }
}

export default Player;