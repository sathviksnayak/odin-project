

export default function Game({score,highscore}){


        return(<div>
            <h1>POKEMON MEMORY GAME</h1>
            <p>Get points by clicking on image but don't click on any image more than once !click all images to win</p>

            <div className="scoreboard">
                <h3>score:{score}</h3>

                <h3>highscore:{highscore}</h3>

            </div>
        </div>)
}