import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';

const Contribute: FC = () => (
  <Section id="contribute" title="Contribute" titleClass="font-xl">
    <Content colSize="column">
      <h3>In this section:</h3>
      <ul>
        <li>- monetary donations</li>
        <li>- other donation ( initiatives )</li>
        <li>- as developer </li>
      </ul>
    </Content>
  </Section>
);

export default Contribute;
