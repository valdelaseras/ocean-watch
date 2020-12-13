import React, { FC } from 'react';
import UtilBar from '../../../atomic/molecules/util-bar/UtilBar';
import Select from '../../../atomic/atoms/select/Select';
import Card from '../../../atomic/molecules/card/Card';
import Feed from '../../../atomic/organisms/feed/Feed';

import { Sighting } from '../../../../model/Sighting';

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

export interface userSightingsProps {
  sightings: Sighting[];
}

const UserSightings: FC<userSightingsProps> = ({ sightings }) => (
  <Feed>
    <UtilBar className="full-vw" title="Your sightings">
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
      {sightings.map((sighting) => (
        <li key={sighting.id}>
          <Card
            utilBar={false}
            colSizeA="column two"
            colSizeB="column two"
            title={sighting.organism.species}
            sightingId={sighting.id}
          >
            <table>
              <tbody>
                <tr>
                  <th>Reported</th>
                  <td>{sighting.timestamp}</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>
                    <a className="underlined" href="">
                      <img src="/assets/icons/gm-pin.svg" alt="google maps pin" className="small-icon" />{' '}
                      {sighting.location}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Biome</th>
                  <td>{sighting.biome}</td>
                </tr>
                <tr>
                  <th>Verifications</th>
                  <td>{sighting.verifications}</td>
                </tr>
                <tr>
                  <th>Latest status</th>
                  <td>{sighting.status}</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </li>
      ))}
    </ul>
  </Feed>
);

export default UserSightings;
