import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import Card from '../../atomic/molecules/card/Card';
import Feed from '../../atomic/organisms/feed/Feed';

// TODO/NOTE: Slight change of plan. Dashboard only shows sightings of current day
// For full complete overview of all sightings within user settings, user should navigate to /sightings

const Dashboard: FC = () => (
  <Section id="dashboard" title="Dashboard" titleClass="font-xl">
    <Content colSize="column">
        <Feed title="Todays sightings">
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
                                <td>[ 18:02 ] Island Bay</td>
                            </tr>
                            <tr>
                                <th>Verifications</th>
                                <td>None yet</td>
                            </tr>
                            <tr>
                                <th>Latest status</th>
                                <td>No updates yet</td>
                            </tr>
                            </tbody>
                        </table>
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
                               <td>[ 16:37 ] Tarakena point</td>
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


      {/*<div>*/}
      {/*  <h3>Typical default dashboard consists of:</h3>*/}
      {/*  <ul>*/}
      {/*    <li>*/}
      {/*      <p>- Potential latest notifications message ( not sure about this yet )</p>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <p>*/}
      {/*        - Feed ( consisting of sightings according to current user settings ). The feed also has its own util bar*/}
      {/*        at the top ( not fixed ) to sort & filter feed*/}
      {/*      </p>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <p>*/}
      {/*        - A util 'bar' ( this is the wrong name I think ) with some icons, fixed to bottom of screen. Some are*/}
      {/*        mandatory and cannot be changed, others can be removed or customized by user.*/}
      {/*      </p>*/}

      {/*      <h3>Mandatory icons in this util bar:</h3>*/}
      {/*      <ul>*/}
      {/*        <li>*/}
      {/*          <p>- Button ( post new sighting )</p>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <p>- ...maybe search icon</p>*/}
      {/*        </li>*/}
      {/*      </ul>*/}

      {/*      <p>*/}
      {/*        Other icons ( with a max of maybe 4 - 5 icons in TOTAL in this bar ) may be 'hotlinks (??)' to features*/}
      {/*        user has set themselves ( for example low tide notifier/info, icon to settings if they prefer, icon to*/}
      {/*        their profile, their own sightings feed or whatever ). If no custom icons, an icon with a plus is*/}
      {/*        displayed instead, next to the mandatory icons*/}
      {/*      </p>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </Content>
  </Section>
);

export default Dashboard;
