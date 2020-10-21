import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import { Outlet } from 'react-router-dom';

const About: FC = () => (
  <Section id="about" title="About" themeClass="theme-tertiary">
    <Content colSize="column">
      <h3>In this section:</h3>
      <ul>
        <li>- Mission statement etc.</li>
        <li>- FAQ</li>
        <li>- Privacy policies, cookie policies</li>
        <li>- Credits?</li>
        <li>- For devs</li>
      </ul>
      <Outlet />
    </Content>
  </Section>
);

export default About;
