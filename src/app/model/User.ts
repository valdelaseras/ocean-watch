import { Sighting } from './Sighting';

export class User {
    id: string;
    username: string;
    email: string;
    karma: number;
    avatarUrl?: string;
    sightings?: Sighting[];
    savedSightings?: Sighting[];
    followedSightings?: Sighting[];
    verifiedSightings?: Sighting[];

    constructor( id: string,
                 username: string,
                 email: string,
                 karma: number,
                 avatarUrl: string,
                 sightings?: Sighting[],
                 savedSightings?: Sighting[],
                 followedSightings?: Sighting[],
                 verifiedSightings?: Sighting[], ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.karma = karma;
        this.avatarUrl = avatarUrl;
        this.sightings = sightings;
        this.savedSightings = savedSightings;
        this.followedSightings = followedSightings;
        this.verifiedSightings = verifiedSightings;
    }
}
