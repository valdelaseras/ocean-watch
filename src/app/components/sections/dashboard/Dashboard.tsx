import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import Card from '../../atomic/molecules/card/Card';
import Feed from '../../atomic/organisms/feed/Feed';
import UtilBar from '../../atomic/molecules/util-bar/UtilBar';
import Select from '../../atomic/atoms/select/Select';

// TODO/NOTE: Dashboard only shows sightings of current day?
//  Not sure if this may be too confusing and one sighting
//  feed is probably preferable.

const distanceSortingOptions = [
  { id: '5km', value: '5km', title: 'Within 5km' },
  { id: '10km', value: '10km', title: 'Within 10km' },
  { id: '25km', value: '25km', title: 'Within 25km' },
  { id: 'all-distances', value: 'all distances', title: 'All' },
];

const genericSortingOptions = [
  { id: 'all', value: 'all', title: 'All' },
  { id: 'latest', value: 'latest', title: 'Latest' },
  { id: 'active', value: 'active', title: 'Active' },
  { id: 'popular', value: 'popular', title: 'Popular' },
];

const biomeSortingOptions = [
  { id: 'all-biomes', value: 'all-biomes', title: 'All biomes' },
  { id: 'sky', value: 'sky', title: 'Sky' },
  { id: 'surface', value: 'surface', title: 'Surface' },
  { id: 'below-surface', value: 'below-surface', title: 'Below surface' },
  { id: 'ocean-floor', value: 'ocean-floor', title: 'Ocean floor' },
  { id: 'tide-pools', value: 'tide-pools', title: 'Tide pools' },
];

const Dashboard: FC = () => (
  <Section id="dashboard" title="Sightings" themeClass="theme-quaternary">
    <Content colSize="column">
      <Feed>
        {/*TODO: on really small screens the dropdowns are a little messed up if there are too many ( 1 more than current )*/}
        <UtilBar className="full-vw">
          <li>
            <Select
              id="sort-by-distance"
              defaultValue={'Within 5km'}
              required={false}
              name="distance-sorting"
              children={distanceSortingOptions}
            />
          </li>
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
        </UtilBar>
        <ul className="feed-list">
          <li>
            <Card colSizeA="column four a" colSizeB="column four c" title="Southern Right Whale">
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
                        <img src="/assets/icons/gm-pin.svg" alt="google maps pin" className="small-icon" /> Island Bay
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Verifications</th>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th>Latest status</th>
                    <td>No updates yet</td>
                  </tr>
                </tbody>
              </table>
              {/*Utility bar goes here with 'hotkeys' to acknowledge sighting. On click shows a modal*/}
              {/* to user to confirm they are indeed looking at the sighting in question in real life*/}
            </Card>
          </li>
          <li>
            <Card colSizeA="column four a" colSizeB="column four c" title="Common Dolphins">
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
                        <img src="/assets/icons/gm-pin.svg" alt="google maps pin" className="small-icon" /> Tarakena
                        point
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Verifications</th>
                    <td>[ 16:37 ] 8</td>
                  </tr>
                  <tr>
                    <th>Latest status</th>
                    <td>[ 16:44 ] No longer in sight</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </li>
        </ul>
      </Feed>
      <UtilBar className="full-vw fixed-bottom align-right">
        <li>
          <button className="btn btn-primary" type="button">
            Post sighting
          </button>
        </li>
      </UtilBar>
    </Content>
  </Section>
);

export default Dashboard;
