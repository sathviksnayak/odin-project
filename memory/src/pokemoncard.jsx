

export default function Pokemoncard({name,id,handleclick,url}){


    return(
        <div className="pokemoncard" key={id} onClick={()=>handleclick(id)}>
            <img src={url} alt={name}></img>
            <h1>{name}</h1>
        </div>
    )
}