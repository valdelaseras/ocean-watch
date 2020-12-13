import { Organism } from './Organism';

// TODO: probably need some sort of tags user can add to sighting or some more complicated
// sightings may be difficult to post ( think something like Bioluminescent Dioflagellates, not everyone may know
// what it is )

// TODO: directions can be NESW or a place/area name, then need some functionality to compare coords point A and B
//  and figure out NESW direction based on that, then automatically add that like: Roseneath ( North )

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
    juvenilesArePresent?: boolean,
  ) {
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
