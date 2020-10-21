import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import Card from '../../atomic/molecules/card/Card';
import Feed from '../../atomic/organisms/feed/Feed';

// TODO/NOTE: Slight change of plan. Dashboard only shows sightings of current day
// For full complete overview of all sightings within user settings, user should navigate to /sightings

const Dashboard: FC = () => (
  // TODO: in this section, it might look better without 'dashboard'
  //  title and section / section content paddings
  <Section id="dashboard" title="Dashboard" titleClass="font-xl">
    <Content colSize="column">
      <Feed>
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
    </Content>
  </Section>
);

export default Dashboard;
