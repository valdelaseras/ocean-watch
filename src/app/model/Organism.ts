export class Organism {
    id: string;
    species: string;
    quantity: string;
    activity?: string;
    direction?: string;
    isHealthy?: boolean;
    juvenilesArePresent?: boolean;

    constructor( id: string,
                 species: string,
                 quantity: string,
                 activity: string,
                 direction?: string,
                 isHealthy?: boolean,
                 juvenilesArePresent?: boolean, ) {
        this.id = id;
        this.species = species;
        this.quantity = quantity;
        this.activity = activity;
        this.direction = direction;
        this.isHealthy = isHealthy;
        this.juvenilesArePresent = juvenilesArePresent;
    }

}
