export class Subscription {
    id: string;
    type: SubscriptionType;

    constructor( id: string, type: SubscriptionType ) {
        this.id = id;
        this.type = type;
    }
}

export class RegionSubscription extends Subscription {
    region: SubscriptionRegion;

    constructor( id: string, type: SubscriptionType, region: SubscriptionRegion ) {
        super( id, type );

        this.region = region;
    }
}

export enum SubscriptionRegion {
    NORTHLAND = 'Northland',
    WELLINGTON = 'Wellington'
}

export class BiomeSubscription extends Subscription {
    biome: SubscriptionBiome;

    constructor( id: string, type: SubscriptionType, biome: SubscriptionBiome ){
        super( id, type );

        this.biome = biome;
    }
}

export enum SubscriptionBiome {
    TIDAL = 'Tidal area',
    SEAFLOOR = 'Sea floor'
}

export class SpeciesSubscription extends Subscription {
    species: SubscriptionSpecies;

    constructor( id: string, type: SubscriptionType, species: SubscriptionSpecies ){
        super( id, type );

        this.species = species;
    }
}

export enum SubscriptionSpecies {
    DOLPHINS = 'Dolphins',
    WHALES = 'Whales'
}

export enum SubscriptionType {
    REGION,
    BIOME,
    SPECIES
}
