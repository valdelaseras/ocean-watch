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
      <li>
        <Card utilBar={false} colSizeA="column four a" colSizeB="column four c" title="Leopard seal">
          {/*TODO: maybe need a more responsive solution instead of a table*/}
          <table>
            <tbody>
              <tr>
                <th>Reported</th>
                <td>[ 18:02 ] 20/10/2020</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>
                  [ 18:02 ]{' '}
                  <a className="underlined" href="">
                    <img src="/assets/icons/gm-pin.svg" alt="google maps pin" className="small-icon" /> Owhiro Bay
                  </a>
                </td>
              </tr>
              <tr>
                <th>Biome</th>
                <td>Coast</td>
              </tr>
              <tr>
                <th>Verifications</th>
                <td>25</td>
              </tr>
              <tr>
                <th>Latest status</th>
                <td>Out of sight</td>
              </tr>
            </tbody>
          </table>
          {/*Utility bar goes here with 'hotkeys' to acknowledge sighting. On click shows a modal*/}
          {/* to user to confirm they are indeed looking at the sighting in question in real life*/}
        </Card>
      </li>
      <li>
        <Card utilBar={false} colSizeA="column four a" colSizeB="column four c" title="Nudibranch">
          {/*TODO: maybe need a more responsive solution instead of a table*/}
          <table>
            <tbody>
              <tr>
                <th>Reported </th>
                <td>[ 16:15 ] 20/10/2020</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>
                  [ 16:37 ]{' '}
                  <a className="underlined" href="">
                    <img src="/assets/icons/gm-pin.svg" alt="google maps pin" className="small-icon" /> Taputeranga
                    Marine Reserve
                  </a>
                </td>
              </tr>
              <tr>
                <th>Biome</th>
                <td>Tide pools</td>
              </tr>
              <tr>
                <th>Verifications</th>
                <td>[ 16:37 ] 2</td>
              </tr>
              <tr>
                <th>Latest status</th>
                <td>[ 16:44 ] Out of sight</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </li>
    </ul>
  </Feed>
);

export default SavedSightings;
