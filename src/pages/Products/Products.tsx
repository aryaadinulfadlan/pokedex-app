import { useCallback, useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import ProductSearch from "../../components/ProductSearch"
import { DataNotFound, ProductContainer, ProductList } from "./ProductStyle"
import { getPokemon, getPokemonList } from "../../api/pokemon"
import { Data, Image, Pokemon, PokemonAbility, PokemonStats, PokemonType, Stats } from "./types"
import ProductFilter from "../../components/ProductFilter"
import { usePokemon } from "../../stores/pokemon"
import CustomLoaderAnimation from "../../components/CustomLoaderAnimation"

const IDLE = 'idle'
const PROCESS = 'process'
const SUCCESS = 'success'
const ERROR = 'error'
const ProductsPage = () => {
  const { pokemon, filteredOrSearchedPokemon, setPokemon, term, activeType } = usePokemon()
  const [status, setStatus] = useState(IDLE)

  const getData = useCallback(async () => {
    setStatus(PROCESS)
    try {
      const { status, data } = await getPokemonList('100')
      if (status === 200) {
        const urls = data.results.map((el: Data) => el.url).map((url: string) => url.slice(34))
        getPokemonData(urls)
      } else {
        alert('An error occured')
        setStatus(ERROR)
      }
    } catch (err) {
      alert('Something went wrong!')
      setStatus(ERROR)
    }
  }, [])

  const getPokemonData = (urls: string[]) => {
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
        } else {
          alert('An error occured')
          setStatus(ERROR)
        }
      })
      setStatus(SUCCESS)
    } catch (err) {
      alert('Something went wrong!')
      setStatus(ERROR)
    }
  }

  useEffect(() => {
    getData()
  }, [getData])

  // console.log({pokemon, term, activeType, filteredOrSearchedPokemon})
  return (
    <ProductContainer>
      <ProductSearch />
      <ProductFilter />
      {
        ((term.length > 0 || activeType.length > 0) && filteredOrSearchedPokemon.length === 0) ? (
          <DataNotFound>No Pokemon Founded</DataNotFound>
        ) : (
          <ProductList>
            {
              filteredOrSearchedPokemon.length === 0 ? pokemon.map(el => (
                <ProductCard key={el.id} {...el} />
              )) : filteredOrSearchedPokemon.length > 0 && filteredOrSearchedPokemon.map(el => (
                <ProductCard key={el.id} {...el} />
              ))
            }
          </ProductList>
        )
      }
      {
        status === PROCESS && <CustomLoaderAnimation />
      }
      {
        status === ERROR && <DataNotFound>An Error Occured!</DataNotFound>
      }
    </ProductContainer>
  )
}

export default ProductsPage