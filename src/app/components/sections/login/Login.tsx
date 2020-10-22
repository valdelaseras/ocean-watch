import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { auth, authUiConfig } from '../../../../firebase';

const Login: FC = () => {

  return (
    <Section id="login" title="Login" titleClass="font-xl" themeClass="theme-tertiary">
      <Content colSize="column">
        <h1>Ocean watch</h1>
        <p>Credentials plz</p>
        <StyledFirebaseAuth uiConfig={authUiConfig} firebaseAuth={ auth } />
      </Content>
    </Section>
  );
};
export default Login;
