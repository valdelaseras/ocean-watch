import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import { Outlet } from 'react-router-dom';

const Contact: FC = () => (
  <Section id="contact" title="Contact" titleClass="font-xl" themeClass="theme-tertiary">
    <Content colSize="column">
      <h3>Contact</h3>
      <ul>
        <li>Mail</li>
        <li>Phone</li>
        <li>As business?</li>
        <li>As dev?</li>
        <li>Report issues</li>
        <li>Feedback</li>
      </ul>
      <Outlet />
    </Content>
  </Section>
);

export default Contact;
