// Util bar component
// Sighting components ( in list )

// A feed may consist of:
// - users own sighting submissions
// - all sightings
// - filtered sightings ( though technically almost all feeds consist of filtered sightings in one way or another )

// - are comments on a sighting also a feed? I would think so

import React, { FC } from 'react';
import Select from '../../atoms/select/Select';

// TODO: ehh probably need to rethink this properly
// latest - oldest
// most active - least active
// most popular - least popular
// nearest - far
// etc.
const genericSortingOptions = [
    { id: 'latest', value: 'latest', title: 'Latest' },
    { id: 'active', value: 'active', title: 'Active' },
    { id: 'popular', value: 'popular', title: 'Popular' },
    { id: 'distance', value: 'nearest', title: 'Nearest' },
]

const biomeSortingOptions = [
    { id: 'all-biomes', value: 'all-biomes', title: 'All' },
    { id: 'sky', value: 'sky', title: 'Sky' },
    { id: 'surface', value: 'surface', title: 'Surface' },
    { id: 'below-surface', value: 'below-surface', title: 'Below surface' },
    { id: 'ocean-floor', value: 'ocean-floor', title: 'Ocean floor' },
    { id: 'tide-pools', value: 'tide-pools', title: 'Tide pools' },
]

export interface FeedProps {
    title?: string;
}

const Feed: FC<FeedProps> = ({ title, children }) => (
    <div className="column feed">
        {/*TODO: move to util-bar component, make reusable */}
        <div className="feed-util-bar">
            <h1>{ title }</h1>
            <ul className="feed-util-list">
                <li>
                    <Select id="sort-by-generic"
                            defaultValue={ "Latest" }
                            required={ false }
                            name="generic-sorting"
                            children={ genericSortingOptions }/>
                </li>
                <li>
                    <Select id="sort-by-biome"
                            defaultValue={ "All" }
                            required={ false }
                            name="biome-sorting"
                            children={ biomeSortingOptions }/>
                </li>
            </ul>
        </div>
        {/*feed this a 'feed-list' with components*/}
        { children }
    </div>
);

export default Feed;
