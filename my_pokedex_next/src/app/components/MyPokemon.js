import Image from "next/image"
import Link from "next/link"

const colorTypes ={
    grass: 'bg-grass',
    fire: 'bg-fire',
    water: 'bg-water',
    bug: 'bg-bug',
    normal: 'bg-normal',
    flying: 'bg-flyng',
}

const Border_colorTypes ={
    grass: 'border-grass',
    fire: 'border-fire',
    water: 'border-water',
    bug: 'border-bug',
    normal: 'border-normal',
    flying: 'border-flyng',
}

export const MyPokemon = ({poke}) =>{
    return(
        <Link href={`/pokemon/${poke.name}`}>
        <div className={`border-2 m-5 border-${poke.type} rounded-2xl text-inherit`}>
            <span className="grid justify-items-end m-2 text-black">#{String(poke.id).padStart(3,'0')}</span>
            <div className="grid justify-items-center">
                <Image 
                    src={poke.image}
                    width={250}
                    height={250}
                    alt={poke.name}
                />
                </div>
                    <h1 className={`p-3 grid justify-items-center bg-${poke.type} rounded-b-2xl text-lg capitalize`}>{poke.name}</h1>
        </div>
        </Link>
    )
  }