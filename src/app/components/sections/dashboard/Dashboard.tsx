import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import Card from '../../atomic/molecules/card/Card';
import Feed from '../../atomic/organisms/feed/Feed';
import UtilBar from '../../atomic/molecules/util-bar/UtilBar';
import Select from '../../atomic/atoms/select/Select';
import { useNavigate } from 'react-router';

const PostSightingButton: FC = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/sighting/new')} className="btn btn-primary" id="post-sighting-btn" type="button">
      Post sighting
    </button>
  );
};

// TODO: if sighting is <TODAY> the card should be a different color
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
          {feedListItems.map((feedListItem) => (
            <li key={feedListItem.id}>
              <Card
                utilBar={true}
                colSizeA="column two"
                colSizeB="column two"
                title={feedListItem.title}
                sightingId={feedListItem.id}
              >
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
      <UtilBar className="full-vw fixed-bottom align-right">
        <li>
          <PostSightingButton />
        </li>
      </UtilBar>
    </Content>
  </Section>
);

export default Dashboard;

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

// TODO: so 'surface' is basically 'can be viewed from land' ( or from a boat... ).
//  Below surface is for sightings like sea horses which you really need to get
//  into the water for. But need to think this through with better names because
//  'dolphins above surface' sounds kind of funny and weird
const biomeSortingOptions = [
  { id: 'all-biomes', value: 'all-biomes', title: 'All biomes' },
  { id: 'sky', value: 'sky', title: 'Sky' },
  { id: 'coast', value: 'coast', title: 'Coast' },
  { id: 'above-surface', value: 'above-surface', title: 'Above surface' },
  { id: 'below-surface', value: 'below-surface', title: 'Below surface' },
  { id: 'ocean-floor', value: 'ocean-floor', title: 'Ocean floor' },
  { id: 'tide-pools', value: 'tide-pools', title: 'Tide pools' },
];

// TODO: also add location google maps link & user message
// This should eventually go into a sighting model anyway
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
  {
    id: '3',
    title: 'Atagema Carinata nudibranch',
    reported: '[ 16:23 ] 02/10/2020',
    location: 'Taputeranga Marine Reserve',
    biome: 'Tide pools',
    verifications: '0',
    status: 'Out of sight',
  },
  {
    id: '4',
    title: 'Pot bellied seahorse',
    reported: '[ 16:05 ] 02/10/2020',
    location: 'Taputeranga Marine Reserve',
    biome: 'Ocean floor',
    verifications: '0',
    status: 'Out of sight',
  },
  {
    id: '5',
    title: 'Orcas',
    reported: '[ 09:34 ] 28/08/2020',
    location: 'Shelly Bay',
    biome: 'Above surface',
    verifications: '33',
    status: 'Out of sight',
  },
  {
    id: '6',
    title: 'Fur seals',
    reported: '[ 13:22 ] 13/06/2020',
    location: 'Red Rocks',
    biome: 'Coast',
    verifications: '0',
    status: 'Out of sight',
  },
];
