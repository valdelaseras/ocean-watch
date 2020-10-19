import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';

const Contact: FC = () => (
  <Section id="contact" title="Contact" titleClass="font-xl">
    <Content colSize="column">
      <h3>In this section:</h3>
      <ul>
        <li>- get in touch ( phone, email )</li>
        <li>- report issues</li>
      </ul>
    </Content>
  </Section>
);

export default Contact;
