import { useCallback, useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import ProductSearch from "../../components/ProductSearch"
import { ProductContainer, ProductList } from "./ProductStyle"
import { getPokemon, getPokemonList } from "../../api/pokemon"

type Data = {
  name: string
  url: string
}
type Stats = {
  name_stat: string
  base_stat: number
}
type Image = {
  key: string
  url: string
}
type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  types: string[]
  stats: Stats[]
  abilities: string[]
  images: Image[]
}

const ProductsPage = () => {
  const [pokemonList, setPokemonList] = useState()

  const getData = useCallback(async () => {
    try {
      const { status, data } = await getPokemonList('0')
      if (status === 200) {
        console.log({data})
        const urls = data.results.map((el: Data) => el.url).map((url: string) => url.slice(34))
        getPokemonData(urls)
      } else {
        alert('An error occured')
      }
    } catch (err) {
      alert('Something went wrong!')
    }
  }, [])

  const getPokemonData = (urls: string[]) => {
    // console.log(urls)
    try {
      urls.forEach(async url => {
        const { status, data } = await getPokemon(url)
        if (status === 200) {
          console.log({data})
        } else {
          alert('An error occured')
        }
      })
    } catch (err) {
      alert('Something went wrong!')
    }
  }

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <ProductContainer>
      <ProductSearch />
      <ProductList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductList>
    </ProductContainer>
  )
}

export default ProductsPage