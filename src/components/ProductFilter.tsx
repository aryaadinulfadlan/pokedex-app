import { useCallback, useEffect } from "react"
import styled from "styled-components"
import { getPokemonTypes } from "../api/pokemon"
import { usePokemon, usePokemonTypes } from "../stores/pokemon"

type Result = {
    name: string
    url: string
}

const ProductFilter = () => {
  const { pokemonTypes, setPokemonTypes } = usePokemonTypes()
  const { activeType, handleFilterOrSearch } = usePokemon()

  const getPokemonType = useCallback(async () => {
    try {
        const { status, data: { results } }: { status: number, data: { results: Result[] } } = await getPokemonTypes()
        if (status === 200) {
            setPokemonTypes(results.map(el => el.name))
        } else {
            alert('An error occured')
        }
    } catch (err) {
        alert('Something went wrong!')
    }
  }, [])
  const handleActiveType = (typ: string) => handleFilterOrSearch(typ, 'filter')
  const handleReset = () => handleFilterOrSearch('', 'filter_reset')

  useEffect(() => {
    getPokemonType()
  }, [getPokemonType])

  return (
    <FilterWrap>
        {
            pokemonTypes.map(el => <span onClick={() => handleActiveType(el)} className={el === activeType ? 'active' : ''} key={el}>{el}</span>)
        }
        <span onClick={handleReset} className={activeType === '' ? 'active' : ''}>All</span>
    </FilterWrap>
  )
}

export default ProductFilter

const FilterWrap = styled.div`
    /* background-color: plum; */
    margin-bottom: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 6px 1rem;
    span {
        padding: 2px 1rem;
        border-radius: 1rem;
        font-weight: bold;
        text-transform: capitalize;
        background-color: transparent;
        border: 1px solid darkblue;
        color: darkblue;
        cursor: pointer;
    }
    span.active {
        background-color: darkblue;
        color: white;
    }
`