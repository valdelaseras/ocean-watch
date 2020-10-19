import React, { FC } from 'react';
import Section from '../../../layout/section/Section';
import Content from '../../../layout/content/Content';

const VisualisedData: FC = () => (
  <Section id="visualised-data" title="Ocean Watch Data" titleClass="font-xl">
    <Content colSize="column">
      <h3>In this section:</h3>
      <ul>
        <li>Cool, sleek looking graphs, infographics of OW collected data</li>
      </ul>
    </Content>
  </Section>
);

export default VisualisedData;
