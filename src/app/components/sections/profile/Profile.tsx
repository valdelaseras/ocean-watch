import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import UserDetails from '../../atomic/molecules/user-details/UserDetails';
import UserSightings from './user-sightings/UserSightings';

const Profile: FC = () => (
  <Section id="profile" themeClass="theme-tertiary">
    <Content colSize="column">
      <UserDetails
        id="1"
        imgSrc="/assets/images/dolphin.png"
        username="Empress"
        email="dolphins@sea.co.nz"
        rank="Asteroid"
        sightings="2"
        givenVerifications="16"
        receivedVerifications="27"
        region="Wellington"
        biomes="All"
        notifications="Within 5 km"
        // TODO: notifications within X distance means we also need to know users current
        // location which people may not like either. Consider to just remove it perhaps.
        // specific region or something might be enough
      />
      <UserSightings />
    </Content>
  </Section>
);

export default Profile;
