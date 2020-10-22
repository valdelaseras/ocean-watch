import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';

const Login: FC = () => (
  <Section id="login" title="Login" titleClass="font-xl" themeClass="theme-tertiary">
    <Content colSize="column">
      <p>Lorem ipsum</p>
      <p>Here be login form</p>
    </Content>
  </Section>
);
export default Login;
