import { create } from "zustand"
import { Pokemon } from "../pages/Products/types"

interface PokemonStore {
    pokemon: Pokemon[]
    pokemonSelectedID: null | number,
    setPokemon: (data: Pokemon) => void
    setPokemonSeletedID: (id: number) => void
    filteredOrSearchedPokemon: Pokemon[] | null
    handleFilterOrSearch: (keyword: string, type: string) => void
    resetFilter: () => void
}

interface PokemonTypes {
    pokemonTypes: string[],
    setPokemonTypes: (data: string[]) => void
}

export const usePokemon = create<PokemonStore>(set => ({
    pokemon: [],
    pokemonSelectedID: null,
    setPokemon: (data: Pokemon) => set(state => ({
        ...state,
        pokemon: [ ...state.pokemon, data ]
    })),
    setPokemonSeletedID: (id: number) => set(state => ({
        ...state,
        pokemonSelectedID: id
    })),
    filteredOrSearchedPokemon: null,
    handleFilterOrSearch: (keyword: string, type: string) => set(state => {
        switch (type) {
            case 'filter':
                return {
                    ...state,
                    // filteredOrSearchedPokemon: state.pokemon.filter(pkm => pkm.types.includes(type))
                }
            case 'search':
                return {
                    ...state,
                    filteredOrSearchedPokemon: state.pokemon.filter(pkm => pkm.name.toLowerCase().includes(keyword.trim().toLowerCase()))
                }
            default:
                return { ...state };
        }
    }),
    resetFilter: () => set(state => ({
        ...state,
        filteredOrSearchedPokemon: null
    })),
}))

export const usePokemonTypes = create<PokemonTypes>(set => ({
    pokemonTypes: [],
    setPokemonTypes: (data: string[]) => set(state => ({
        ...state,
        pokemonTypes: data
    }))
}))