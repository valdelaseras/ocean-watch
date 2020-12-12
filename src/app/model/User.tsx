import { Sighting } from './Sighting';

export class User {
    id: string;
    username: string;
    tier: string;
    avatarUrl?: string;
    postedSightings?: Sighting[];
    savedSightings?: Sighting[];
    followedSightings?: Sighting[];
    verifiedSightings?: Sighting[];

    constructor( id: string,
                 username: string,
                 tier: string,
                 avatarUrl: string,
                 postedSightings?: Sighting[],
                 savedSightings?: Sighting[],
                 followedSightings?: Sighting[],
                 verifiedSightings?: Sighting[], ) {
        this.id = id;
        this.username = username;
        this.tier = tier;
        this.avatarUrl = avatarUrl;
        this.postedSightings = postedSightings;
        this.savedSightings = savedSightings;
        this.followedSightings = followedSightings;
        this.verifiedSightings = verifiedSightings;
    }
}

export default User;
