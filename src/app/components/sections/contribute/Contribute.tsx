import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import { Outlet } from 'react-router-dom';

const Contribute: FC = () => (
  <Section id="contribute" title="Contribute" titleClass="font-xl">
    <Content colSize="column">
      <h3>Contribute</h3>
        <Outlet />
    </Content>
  </Section>
);

export default Contribute;
