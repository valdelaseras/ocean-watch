import React, { FC } from 'react';
import UtilBar from '../../../atomic/molecules/util-bar/UtilBar';
import Select from '../../../atomic/atoms/select/Select';
import Card from '../../../atomic/molecules/card/Card';
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

const feedListItems = [
  {
    id: '1',
    title: 'Common dolphins',
    reported: '[ 11:14 ] 23/10/2020',
    location: 'Island Bay',
    biome: 'Above surface',
    verifications: '18',
    status: 'Still here',
  },
  {
    id: '2',
    title: 'Reef octopus',
    reported: '[ 18:23 ] 20/10/2020',
    location: 'Taputeranga Marine Reserve',
    biome: 'Tide pools',
    verifications: '1',
    status: 'Out of sight',
  },
];

const UserSightings: FC = () => (
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
      {feedListItems.map((feedListItem) => (
        <li key={feedListItem.id}>
          <Card utilBar={false} colSizeA="column two" colSizeB="column two" title={feedListItem.title}>
            <table>
              <tbody>
                <tr>
                  <th>Reported</th>
                  <td>{feedListItem.reported}</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>
                    <a className="underlined" href="">
                      <img src="/assets/icons/gm-pin.svg" alt="google maps pin" className="small-icon" />{' '}
                      {feedListItem.location}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Biome</th>
                  <td>{feedListItem.biome}</td>
                </tr>
                <tr>
                  <th>Verifications</th>
                  <td>{feedListItem.verifications}</td>
                </tr>
                <tr>
                  <th>Latest status</th>
                  <td>{feedListItem.status}</td>
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
