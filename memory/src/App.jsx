import { useState,useEffect } from 'react'
import Pokemoncard from './pokemoncard';
import Game from './game';
import "./style.css"
import Win from './win';
function App() {
  const [pokemonlist,setpokemonlist]=useState([]);
const [limit, setLimit] = useState(4);
const [locked, setLocked] = useState(false);
 useEffect(() => {

 async function fetchPokemon(){
   try{
      let res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
      );

      let data = await res.json();

      const pokemon = data.results.map((poke,index)=>({
        id:index+1,
        name:poke.name,
        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
      }));

      setpokemonlist(pokemon);

   } catch(err){
      console.log(err);
   }
 }

 fetchPokemon();

},[limit])

  const [caughtpokemonid,setcaughtpokemonid] =useState([]);
 const [score,setscore]=useState(0);
 const [highscore,sethighscore]=useState(0);
   const [outcome,setoutcome]=useState(false);
const restart = () => {
  setoutcome(false);
  setscore(0);
  setcaughtpokemonid([]);
}
 const handleclick = (id) => {
    if(locked) return;

  setLocked(true);

  if (caughtpokemonid.includes(id)) {
    setscore(0);
    setcaughtpokemonid([]);
    setLocked(false);
    return;
  }


  const updatedCaught = [...caughtpokemonid, id];
  setcaughtpokemonid(updatedCaught);

  const newScore = score + 1;
  setscore(newScore);
  sethighscore(Math.max(newScore, highscore));
  if(newScore===pokemonlist.length){
        if(limit < 16){
        setTimeout(() => {
            setLimit(limit * 2);
            setscore(0);
            setcaughtpokemonid([]);
        },1000);
        setLocked(false);

        return;
    }
    setoutcome(true);
  }

  setpokemonlist(reshuffle(pokemonlist));
  setTimeout(() => {
   setLocked(false);
},100)
};


 
const reshuffle=(pokemonlist)=>{
  let shuffled=[...pokemonlist];

  for(let i=0;i<shuffled.length;i++){
    let j=Math.floor(Math.random()*shuffled.length);
  [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled;
}

  return (
<div >
  <Game score={score} highscore={highscore}/>
  <h3>Level: {limit / 4}</h3>
  {outcome? <div><Win/><button onClick={restart}>restart game</button></div>:
  <div className='container'>
   {pokemonlist.map((pokemon)=><Pokemoncard key={pokemon.id} id={pokemon.id} name={pokemon.name} url={pokemon.image} handleclick={handleclick}/>)}

  </div>
}
</div>
  )
}

export default App
