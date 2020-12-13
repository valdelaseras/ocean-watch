import React, { FC } from 'react';
import UtilBar from '../../../atomic/molecules/util-bar/UtilBar';
import Select from '../../../atomic/atoms/select/Select';
import Feed from '../../../atomic/organisms/feed/Feed';

// TODO: util bar select dropdowns are very similar : )
const genericSortingOptions = [
  { id: 'all', value: 'all', title: 'All' },
  { id: 'latest', value: 'latest', title: 'Latest' },
  { id: 'popular', value: 'popular', title: 'Popular' },
];

const biomeSortingOptions = [
  { id: 'all-biomes', value: 'all-biomes', title: 'All biomes' },
  { id: 'sky', value: 'sky', title: 'Sky' },
  { id: 'coast', value: 'coast', title: 'Coast' },
  { id: 'surface', value: 'surface', title: 'Surface' },
  { id: 'below-surface', value: 'below-surface', title: 'Below surface' },
  { id: 'ocean-floor', value: 'ocean-floor', title: 'Ocean floor' },
  { id: 'tide-pools', value: 'tide-pools', title: 'Tide pools' },
];

const SavedSightings: FC = () => (
  <Feed>
    <UtilBar className="full-vw" title="Saved sightings">
      <li>
        <Select
          id="sort-sightings"
          defaultValue={'Latest'}
          required={false}
          name="generic-sorting"
          children={genericSortingOptions}
        />
      </li>
      <li>
        <Select
          id="sort-by-biome"
          defaultValue={'All'}
          required={false}
          name="biome-sorting"
          children={biomeSortingOptions}
        />
      </li>
    </UtilBar>
    <ul className="feed-list">
      <li>Saved sighting cards go here</li>
      <li>Saved sighting cards go here</li>
    </ul>
  </Feed>
);

export default SavedSightings;
