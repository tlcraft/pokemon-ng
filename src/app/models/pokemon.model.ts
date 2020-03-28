export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Resource[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;    
    order: number;
    species: Resource;
    sprites: Sprites;
    stats: Stat[];
    types: PokemonType[];
    weight: number;    
}

export interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: Resource;      
}

export interface GameIndex {
    game_index: number;
    version: Resource[];
}

export interface HeldItem {
    item: Resource;
    version_details: VersionDetails[];
}

export interface VersionDetails {
    rarity: number;
    version: Resource;
}

export interface Move {
    move: Resource;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: Resource;
    version_group: Resource;
}

export interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Resource;
}

export interface PokemonType {
    slot: number;
    type: Resource;
}

export interface Resource {
    name: string;
    url: string;
}