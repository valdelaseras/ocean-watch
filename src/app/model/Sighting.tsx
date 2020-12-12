import { Organism} from './Organism';

export class Sighting {
    status: string;
    location: string;
    timestamp: string;
    verifications: number;
    organism: Organism;
    note?: string;
    mediaUrls?: string[];

    constructor(
        status: string,
        location: string,
        timestamp: string,
        verifications: number,
        organism: Organism,
        note?: string,
        mediaUrls?: string[]
    ){
        this.status = status;
        this.location = location;
        this.timestamp = timestamp;
        this.verifications = verifications;
        this.note = note;
        this.organism = organism;
        this.mediaUrls = mediaUrls;
    }
}
