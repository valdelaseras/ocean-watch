// Utility bar for, for example, top of feed.
// Holds components like select elements and search inputs to filter feed

// Might use it elsewhere as well but in the feed, a user can filter feed in util bar by:
// - region
// - latest / oldest
// - species
// - maybe popularity(?)

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
];

const biomeSortingOptions = [
  { id: 'all-biomes', value: 'all-biomes', title: 'All biomes' },
  { id: 'sky', value: 'sky', title: 'Sky' },
  { id: 'surface', value: 'surface', title: 'Surface' },
  { id: 'below-surface', value: 'below-surface', title: 'Below surface' },
  { id: 'ocean-floor', value: 'ocean-floor', title: 'Ocean floor' },
  { id: 'tide-pools', value: 'tide-pools', title: 'Tide pools' },
];

const UtilBar: FC = ({}) => (
  <div className="util-bar">
    <ul className="util-list">
      {/*list items with children utility elements here*/}
      <li>
        <Select
          id="sort-by-generic"
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
    </ul>
  </div>
);

export default UtilBar;
