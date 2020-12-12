import { Organism} from './Organism';

export class Sighting {
    id: string;
    status: string;
    location: string;
    timestamp: string;
    verifications: number;
    organism: Organism;
    quantity: string;
    note?: string;
    biome?: string;
    mediaUrls?: string[];
    activity?: string;
    direction?: string;
    isHealthy?: boolean;
    juvenilesArePresent?: boolean;

    constructor(
        id: string,
        status: string,
        location: string,
        timestamp: string,
        verifications: number,
        organism: Organism,
        quantity: string,
        note?: string,
        biome?: string,
        mediaUrls?: string[],
        activity?: string,
        direction?: string,
        isHealthy?: boolean,
        juvenilesArePresent?: boolean
    ){
        this.id = id;
        this.status = status;
        this.location = location;
        this.timestamp = timestamp;
        this.verifications = verifications;
        this.note = note;
        this.biome = biome;
        this.organism = organism;
        this.quantity = quantity;
        this.mediaUrls = mediaUrls;
        this.activity = activity;
        this.direction = direction;
        this.isHealthy = isHealthy;
        this.juvenilesArePresent = juvenilesArePresent;
    }
}

