import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';

const Dashboard: FC = () => (
  <Section id="dashboard" title="Dashboard" titleClass="font-xl">
    <Content colSize="column">
      <p>Dashboard content goes here</p>
    </Content>
  </Section>
);

export default Dashboard;
