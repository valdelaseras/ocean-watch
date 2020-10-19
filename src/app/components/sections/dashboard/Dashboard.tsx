import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';
import FormField from '../../atomic/molecules/form/form-field/FormField';
import Input from '../../atomic/atoms/input/Input';

const Dashboard: FC = () => (
  <Section id="dashboard" title="Dashboard" titleClass="font-xl">
    <Content colSize="column">
      <p>Dashboard content goes here</p>
      <FormField>
        <Input id="test" title="test" name="name" type="text" placeholder="this is a placeholder" defaultValue="" />
      </FormField>
    </Content>
  </Section>
);

export default Dashboard;
