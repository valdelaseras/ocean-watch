import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import UserDetails from '../../atomic/molecules/user-details/UserDetails';

const Profile: FC = () => (
  <Section id="profile" themeClass="theme-tertiary">
    <Content colSize="column">
      <UserDetails
        id="1"
        imgSrc="/assets/images/dolphin.png"
        username="Empress"
        email="dolphins@sea.co.nz"
        rank="Asteroid"
        sightings="3"
        region="Wellington"
      />
    </Content>
  </Section>
);

export default Profile;
