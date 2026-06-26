import Gameboard from "./gameboard";
import Ship from "./ship";
import Player from "./player";
import "./styles.css"
const playerBoardEl = document.getElementById('playerbase');
const computerBoardEl = document.getElementById('compbase');
const startBtn = document.getElementById('start');
const statusEl = document.getElementById('status');

let player, computer, gameOver = false;
let playerTurn=true;
function renderBoard(board, element, isPlayer = false) {
  element.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.classList.add("cell");
      div.dataset.row = i;
      div.dataset.col = j;

      const key = `${i},${j}`;

      if (isPlayer && board.ships.has(key)) {
        div.classList.add("ship");
      }

      if (board.Shots.has(key)) {
        div.classList.add(board.ships.has(key) ? "hit" : "miss");
      }

      element.appendChild(div);
    }
  }
}

function canPlaceShip(board, length, x, y, horizontal) {
  for (let i = 0; i < length; i++) {
    const row = horizontal ? x : x + i;
    const col = horizontal ? y + i : y;
    if (row < 0 || row >= 10 || col < 0 || col >= 10 || board.ships.has(`${row},${col}`)) {
      return false;
    }
  }
  return true;
}

function placeShipsRandomly(board) {
  const shipLengths = [5, 4, 3, 3, 2];
  for (let len of shipLengths) {
    let placed = false;
    while (!placed) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const horizontal = Math.random() > 0.5;

      if (canPlaceShip(board, len, x, y, horizontal)) {
        const ship = new Ship(len);
        board.placeShip(ship, x, y, horizontal);
        placed = true;
      }
    }
  }
}

function handlePlayerAttack(e) {
  if (gameOver || !player || !computer || !playerTurn) return;

  if (!e.target.classList.contains("cell")) return;

  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);

  let key = `${row},${col}`;

  if (computer.board.Shots.has(key)) return;

  playerTurn = false;

  player.attack(computer.board, row, col);

  renderBoard(computer.board, computerBoardEl);

  if (computer.board.allShipsSunk()) {
    gameOver = true;
    startBtn.disabled = false;
   statusEl.textContent = "MISSION SUCCESS";
    return;
  }

  setTimeout(() => {
    computer.computerMove(player.board);

    renderBoard(player.board, playerBoardEl, true);

    if (player.board.allShipsSunk()) {
        startBtn.disabled = false;
      gameOver = true;
      statusEl.textContent = "VESSEL DESTROYED";
    } else {
      playerTurn = true;
    }
  }, 700);
}
computerBoardEl.addEventListener("click", handlePlayerAttack);
function startGame() {
  player = new Player(false);
  computer = new Player(true);
playerTurn = true;
  placeShipsRandomly(player.board);
  placeShipsRandomly(computer.board);

  renderBoard(player.board, playerBoardEl, true);
  renderBoard(computer.board, computerBoardEl);


  gameOver = false;
  statusEl.textContent = "Game started! Click on the red board to attack.";
  startBtn.disabled = true;
}

startBtn.addEventListener('click', startGame);