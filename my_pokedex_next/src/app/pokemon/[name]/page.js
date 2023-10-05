async function getData({name}){

  const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${name}`)  
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }    
  return res.json()

}

export default async function Pokemon({ params }) {
    const pokemon = await getData({ name: params.name })
    return <div>
        <ul>
            {pokemon.stats.map(stat =>(
                <li className="flex gap-3">
                    <p>{stat.stat.name}: </p>{stat.base_stat} <span className="block w-[100] h-5 bg-white relative "></span>                    
                </li>
            ))}
        </ul>
    </div>
  }