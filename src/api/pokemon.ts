import axiosClient from "./axiosClient"

export const getPokemonList = (offset: string) => {
    const url = `pokemon/?offset=${offset}&limit=3`
    return axiosClient.get(url)
}

export const getPokemon = (pokeID: string) => {
    const url = `pokemon/${pokeID}`
    return axiosClient.get(url)
}

export const getPokemonTypes = () => {
    const url = `type`
    return axiosClient.get(url)
}