import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
// import FormField from '../../atomic/molecules/form/form-field/FormField';
// import Input from '../../atomic/atoms/input/Input';

const Dashboard: FC = () => (
  <Section id="dashboard" title="Dashboard" titleClass="font-xl">
    <Content colSize="column">
        <h3>Typical default dashboard consists of:</h3>
        <ul>
            <li>
                <p>
                    - Potential latest notifications message ( not sure about this yet )
                </p>
            </li>
            <li>
                <p>
                    - Feed ( consisting of sightings according to current user settings ).
                    The feed also has its own util bar at the top ( not fixed ) to sort & filter feed
                </p>
            </li>
            <li>
                <p>
                    - A util 'bar' ( this is the wrong name I think ) with some icons, fixed to bottom of screen.
                    Some are mandatory and cannot be changed, others can be removed or customized by user.
                </p>

                <h3>Mandatory icons in this util bar:</h3>
                <ul>
                    <li>
                        <p>
                            - Button ( post new sighting )
                        </p>
                    </li>
                    <li>
                        <p>
                            - ...maybe search icon
                        </p>
                    </li>
                </ul>

                <p>
                    Other icons ( with a max of maybe 4 - 5 icons in TOTAL in this bar ) may be 'hotlinks (??)' to features
                    user has set themselves ( for example low tide notifier/info, icon to settings if they prefer, icon to
                    their profile, their own sightings feed or whatever ). If no custom icons, an icon with a plus is
                    displayed instead, next to the mandatory icons
                </p>
            </li>
        </ul>
      {/*<FormField>*/}
      {/*  <Input id="test" title="test" name="name" type="text" placeholder="this is a placeholder" defaultValue="" />*/}
      {/*</FormField>*/}
    </Content>
  </Section>
);

export default Dashboard;
