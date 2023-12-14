export type Data = {
    name: string
    url: string
}
export type PokemonType = {
    slot: number
    type: {
      name: string
      url: string
    }
}
export type PokemonStats = {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
}
export type PokemonAbility = {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
}
export type PokemonSprites = {
    other: {
        dream_world: {
            front_default: string
        }
        home: {
            front_default: string
            front_shiny: string
        }
        'official-artwork': {
            front_default: string
            front_shiny: string
        }
    }
}
export type Stats = {
    name_stat: string
    base_stat: number
}
export type Image = {
    key: string
    url: string
}
export type Pokemon = {
    id: number
    name: string
    height: number
    weight: number
    types: string[]
    stats: Stats[]
    abilities: string[]
    images: Image[]
}