function knightMoves(start,end){

    const moves=[
        [2,1],[2,-1],
        [-2,1],[-2,-1],
        [1,2],[1,-2],
        [-1,2],[-1,-2]
    ];

    function getMoves(pos){
        let [x,y]=pos;
        let result=[];

        for(let [dx,dy] of moves){
            let nx=x+dx;
            let ny=y+dy;

            if(nx>=0 && nx<8 && ny>=0 && ny<8){
                result.push([nx,ny]);
            }
        }
        return result;
    }

    let queue=[[start,[start]]];

    let visited=new Set();
    visited.add(start.toString());

    while(queue.length){

        let [current,path]=queue.shift();

        if(current[0]===end[0] && current[1]===end[1]){
            return path;
        }

        let nextMoves=getMoves(current);

        for(let move of nextMoves){

            let key=move.toString();

            if(!visited.has(key)){
                visited.add(key);

                queue.push([
                    move,
                    [...path,move]
                ]);
            }
        }
    }
}