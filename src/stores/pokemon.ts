import { create } from "zustand"
import { Pokemon } from "../pages/Products/types"

interface PokemonStore {
    pokemon: Pokemon[]
    // pokemonSelectedID: null | number
    setPokemon: (data: Pokemon) => void
    // setPokemonSeletedID: (id: number) => void
    filteredOrSearchedPokemon: Pokemon[]
    handleFilterOrSearch: (keyword: string, type: string) => void
    activeType: string 
    setActiveType: (value: string) => void
    term: string
    pokemonReset: () => void
}

interface PokemonTypes {
    pokemonTypes: string[]
    setPokemonTypes: (data: string[]) => void
}

export const usePokemon = create<PokemonStore>(set => ({
    pokemon: [],
    // pokemonSelectedID: null,
    setPokemon: (data: Pokemon) => set(state => ({
        ...state,
        pokemon: [ ...state.pokemon, data ]
    })),
    // setPokemonSeletedID: (id: number) => set(state => ({
    //     ...state,
    //     pokemonSelectedID: id
    // })),
    filteredOrSearchedPokemon: [],
    handleFilterOrSearch: (keyword: string, type: string) => set(state => {
        switch (type) {
            case 'filter':
                return {
                    ...state,
                    activeType: keyword,
                    term: '',
                    filteredOrSearchedPokemon: state.pokemon.filter(pkm => pkm.types.includes(keyword))
                }
            case 'filter_reset':
                return {
                    ...state,
                    activeType: keyword,
                    term: '',
                    filteredOrSearchedPokemon: []
                }
            case 'search':
                return {
                    ...state,
                    activeType: '',
                    term: keyword,
                    filteredOrSearchedPokemon: state.pokemon.filter(pkm => pkm.name.toLowerCase().includes(keyword.trim().toLowerCase()))
                }
            case 'search_reset':
                return {
                    ...state,
                    activeType: '',
                    term: keyword,
                    filteredOrSearchedPokemon: []
                }
            default:
                return { ...state };
        }
    }),
    activeType: '',
    setActiveType: (value: string) => set(state => ({
        ...state,
        activeType: value
    })),
    term: '',
    pokemonReset: () => set(state => ({
        ...state,
        pokemon: [],
        filteredOrSearchedPokemon: [],
        activeType: '',
        term: '',
    }))
}))

export const usePokemonTypes = create<PokemonTypes>(set => ({
    pokemonTypes: [],
    setPokemonTypes: (data: string[]) => set(state => ({
        ...state,
        pokemonTypes: data
    }))
}))