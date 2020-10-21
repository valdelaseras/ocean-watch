import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';

const Profile: FC = () => (
  <Section id="profile" title="Profile" titleClass="font-xl" themeClass="theme-tertiary">
    <Content colSize="column">
      <p>Profile goes here</p>
    </Content>
  </Section>
);

export default Profile;
