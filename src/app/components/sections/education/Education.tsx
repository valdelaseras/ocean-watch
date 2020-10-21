import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import { Outlet } from 'react-router-dom';

const Education: FC = () => (
  <Section id="about" title="Education" titleClass="font-xl" themeClass="theme-tertiary">
    <Content colSize="column">
      <h3>In this section:</h3>
      <ul>
        <li>- Ocean Watch data ( infographics, graphs, trends, maybe predictions. Some ML opportunities here maybe</li>
        <li>- Identification guides and resources</li>
        <li>- Tips ? ( how, what, where, when to find X )</li>
      </ul>
      <Outlet />
    </Content>
  </Section>
);

export default Education;
