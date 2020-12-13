import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import UserDetails from '../../atomic/molecules/user-details/UserDetails';
import UserSightings from './user-sightings/UserSightings';

import { stubCurrentUser as currentUser } from '../../../stubs/currentUser';
import { stubCurrentUserSightings } from '../../../stubs/currentUserSightings';

const Profile: FC = () => (
  <Section id="profile" themeClass="theme-tertiary">
    <Content colSize="column">
      <UserDetails
        id={currentUser.id}
        imgSrc={currentUser.avatarUrl}
        username={currentUser.username}
        email={currentUser.email}
        karma={currentUser.karma}
        sightings={currentUser.sightings ? currentUser.sightings.length : 0}
        givenVerifications="16"
        receivedVerifications="27"
        region="Wellington"
        biomes="All"
        notifications="Within 5 km"
        // TODO: notifications within X distance means we also need to know users current
        // location which people may not like either. Consider to just remove it perhaps.
        // specific region or something might be enough
      />
      <UserSightings sightings={stubCurrentUserSightings} />
    </Content>
  </Section>
);

export default Profile;
