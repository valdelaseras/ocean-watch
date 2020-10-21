import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';

const Hotlines: FC = () => (
  <Section id="about" title="Emergency hotlines" titleClass="font-xl" themeClass="theme-tertiary">
    <Content colSize="column">
      <h3>In this section:</h3>
      <ul>
        <li>Several DOC hotlines ( see DOC site )</li>
        <li>Some elaboration why when which</li>
      </ul>
    </Content>
  </Section>
);

export default Hotlines;
