import Ship from "./ship";

class Gameboard {
  constructor() {
  

    this.Shots = new Set();
    this.ships = new Map();
    this.shipList = [];
  }

placeShip(ship, x, y, horizontal) {
     this.shipList.push(ship);
  for(let i=0;i<ship.length;i++){

    let row = horizontal ? x : x+i;
    let col = horizontal ? y+i : y;

    let key = `${row},${col}`;

    this.ships.set(key, ship);
   
  }
}

receiveAttack(x,y){

   let key = `${x},${y}`;

   if(this.Shots.has(key)) return;

   this.Shots.add(key);

   if(this.ships.has(key)){
      let ship = this.ships.get(key);
      ship.hit();

      if(ship.isSunk()){
         console.log("ship sunk");
      }

      return true;  
   }

   return false;   
}

  allShipsSunk() {
    return this.shipList.every(ship => ship.isSunk());
  }
}


export default Gameboard;