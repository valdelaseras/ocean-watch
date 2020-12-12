export class Subscription {
    type: SubscriptionType;

    constructor( type: SubscriptionType ) {
        this.type = type;
    }
}

export class RegionSubscription extends Subscription {
    region: SubscriptionRegion;

    constructor( type: SubscriptionType, region: SubscriptionRegion ) {
        super( type );

        this.region = region;
    }
}

export enum SubscriptionRegion {
    NORTHLAND = 'Northland',
    WELLINGTON = 'Wellington'
}

export class BiomeSubscription extends Subscription {
    biome: SubscriptionBiome;

    constructor( type: SubscriptionType, biome: SubscriptionBiome ){
        super( type );

        this.biome = biome;
    }
}

export enum SubscriptionBiome {
    TIDAL = 'Tidal area',
    SEAFLOOR = 'Sea floor'
}

export class SpeciesSubscription extends Subscription {
    species: SubscriptionSpecies;

    constructor( type: SubscriptionType, species: SubscriptionSpecies ){
        super( type );

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
