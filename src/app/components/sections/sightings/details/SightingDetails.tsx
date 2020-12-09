import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../../layout/section/Section';
import Content from '../../../layout/content/Content';

const SightingDetails: FC = () => {
  const { id } = useParams();

  return (
    <Section id="sighting-details" titleClass="font-xl">
      <Content colSize="column">
        <p>Sighting ID: {id}</p>
        <p>Sighting details go here</p>
      </Content>
    </Section>
  );
};

export default SightingDetails;
