import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import { Outlet } from 'react-router-dom';

const Settings: FC = () => (
  <Section id="settings" title="Settings" titleClass="font-xl">
    <Content colSize="column">
        <Outlet />
    </Content>
  </Section>
);

export default Settings;
