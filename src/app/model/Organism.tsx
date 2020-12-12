export class Organism {
    species: string;
    quantity: string;
    activity?: string;
    direction?: string;
    biome?: string;
    isHealthy?: boolean;
    juvenilesArePresent?: boolean;

    constructor( species: string,
                 quantity: string,
                 activity: string,
                 isHealthy?: boolean,
                 direction?: string,
                 biome?: string,
                 juvenilesArePresent?: boolean, ) {
        this.species = species;
        this.quantity = quantity;
        this.activity = activity;
        this.direction = direction;
        this.biome = biome;
        this.isHealthy = isHealthy;
        this.juvenilesArePresent = juvenilesArePresent;
    }

}

export default Organism;
