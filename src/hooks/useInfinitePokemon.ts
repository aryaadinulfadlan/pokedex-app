import { useCallback, useEffect, useState } from "react"
import { getPokemon, getPokemonList } from "../api/pokemon"
import { usePokemon } from "../stores/pokemon"
import { Data, Image, Pokemon, PokemonAbility, PokemonStats, PokemonType, Stats } from "../pages/Products/types"

export const PROCESS = 'process'
export const SUCCESS = 'success'
export const ERROR = 'error'

type APIResponse = {
    status: number
    data: {
        next: string | null
        results: {
            name: string
            url: string
        }[]
    }
}

export default function useInfinitePokemon(offset: string) {
  const [hasMore, setHasMore] = useState(false)
  const [status, setStatus] = useState(PROCESS)
  const { setPokemon, pokemonReset } = usePokemon()
  
  const getPokemonData = useCallback((urls: string[]) => {
    try {
      urls.forEach(async url => {
        const { status, data } = await getPokemon(url)
        if (status === 200) {
          let newData = {} as Pokemon
          for (const key in data) {
            if (key === 'id' || key === 'name' || key === 'height' || key === 'weight') {
              newData = { ...newData, [key]: data[key] }
            }
            if (key === 'types') {
              const types: string[] = data[key].map((el: PokemonType) => el.type.name)
              newData = { ...newData, types }
            }
            if (key === 'stats') {
              const stats: Stats[] = data[key].map((el: PokemonStats) => {
                return {
                  name_stat: el.stat.name,
                  base_stat: el.base_stat
                }
              })
              newData = { ...newData, stats }
            }
            if (key === 'abilities') {
              const abilities: string[] = data[key].map((el: PokemonAbility) => el.ability.name)
              newData = { ...newData, abilities }
            }
            if (key === 'sprites') {
              let images: Image[] = []
              const otherKey = data[key].other
              for (const sub_key in otherKey) {
                if (sub_key === 'dream_world') {
                  images = [ ...images, { key: 'main', url: otherKey[sub_key].front_default } ]
                }
                if (sub_key === 'home') {
                  images = [ ...images, { key: 'others', url: otherKey[sub_key].front_default }, { key: 'others', url: otherKey[sub_key].front_shiny } ]
                }
                if (sub_key === 'official-artwork') {
                  images = [ ...images, { key: 'others', url: otherKey[sub_key].front_default }, { key: 'others', url: otherKey[sub_key].front_shiny } ]
                }
              }
              newData = { ...newData, images }
            }
          }
          setPokemon(newData)
          setStatus(SUCCESS)
        } else {
          alert('An error occured')
          setStatus(ERROR)
        }
      })
    } catch (err) {
      setStatus(ERROR)
    }
  }, [])

  const getData = useCallback(async () => {
    setStatus(PROCESS)
    if (!hasMore) {
      pokemonReset()
    }
    try {
      const { status, data: { results, next } }: APIResponse = await getPokemonList(offset)
      if (status === 200) {
        const urls = results.map((el: Data) => el.url).map((url: string) => url.slice(34))
        getPokemonData(urls)
        setHasMore(next ? true : false)
      } else {
        alert('An error occured')
        setStatus(ERROR)
      }
    } catch (err) {
      setStatus(ERROR)
    }
  }, [offset])

  useEffect(() => {
    getData()
  }, [getData])

  return { status, hasMore }
}
