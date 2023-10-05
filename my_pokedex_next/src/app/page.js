import Image from 'next/image'
import { MyPokemon } from './components/MyPokemon'

async function getData() {
  const res = await fetch('http://localhost:3000/api/pokemon')
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

  const data = await getData()

  return (
    <main className='grid grid-cols-3 min-h-screen p-24 bg-white'>      
      {data.data.results.map((poke) => <MyPokemon  key={poke.id} poke ={poke}/>)}
    </main>
  )
}

