import { useCallback, useRef, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import ProductSearch from "../../components/ProductSearch"
import { DataNotFound, ProductContainer, ProductList } from "./ProductStyle"
import ProductFilter from "../../components/ProductFilter"
import { usePokemon } from "../../stores/pokemon"
import CustomLoaderAnimation from "../../components/CustomLoaderAnimation"
import useInfinitePokemon, { ERROR, PROCESS } from "../../hooks/useInfinitePokemon"
import { Pokemon } from "./types"

const ProductsPage = () => {
  const { pokemon, filteredOrSearchedPokemon, term, activeType } = usePokemon()
  const [offset, setOffset] = useState(0)
  const { status, hasMore } = useInfinitePokemon(offset.toString())

  const observer = useRef<IntersectionObserver>()
  const lastPostElementRef = useCallback((node: HTMLDivElement) => {
    if (status === PROCESS) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setOffset(offs => offs + 3)
      }
    })
    if (node) observer.current.observe(node)
  }, [hasMore, status])

  console.log({pokemon, filtered: filteredOrSearchedPokemon, hasMore})
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
              filteredOrSearchedPokemon.length === 0 ? pokemon.map((el: Pokemon, idx: number) => {
                if (pokemon.length === idx + 1) {
                  return <ProductCard key={el.id} {...el} refElement={lastPostElementRef} />
                } else {
                  return <ProductCard key={el.id} {...el} />
                }
              }) : filteredOrSearchedPokemon.length > 0 && filteredOrSearchedPokemon.map(el => (
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