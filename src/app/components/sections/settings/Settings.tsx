import React, { FC } from 'react';
import Section from "../../layout/section/Section";
import Content from "../../layout/content/Content";

const Settings: FC = () =>
    <Section id="settings" title="Settings" titleClass="font-xl">
        <Content colSize="column">
            <p>Settings go here</p>
        </Content>
    </Section>;

export default Settings;
