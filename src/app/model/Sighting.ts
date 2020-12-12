import { Organism} from './Organism';

export class Sighting {
    id: string;
    status: string;
    location: string;
    timestamp: string;
    verifications: number;
    organism: Organism;
    note?: string;
    biome?: string;
    mediaUrls?: string[];

    constructor(
        id: string,
        status: string,
        location: string,
        timestamp: string,
        verifications: number,
        organism: Organism,
        note?: string,
        biome?: string,
        mediaUrls?: string[]
    ){
        this.id = id;
        this.status = status;
        this.location = location;
        this.timestamp = timestamp;
        this.verifications = verifications;
        this.note = note;
        this.biome = biome;
        this.organism = organism;
        this.mediaUrls = mediaUrls;
    }
}

