import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../../layout/section/Section';
import Content from '../../../layout/content/Content';

const SightingDetails: FC = () => {
  const { id } = useParams();

  return (
    <Section id="sighting-details" titleClass="font-xl">
      <Content colSize="column">
        <p>Sighting ID: { id }</p>
        <p>Not sure about the order yet but below will be displayed here:</p>
        <ul>
            <li>- Sighting card with info similar to dashboard card</li>
            <li>- Edit sighting, report sighting utils</li>
            <li>- Updates/comments feed</li>
            <li>- Pictures</li>
            <li>- Map widget?</li>
            <li>- Stats widget ( some cool stats to compare earlier sightings of this same species in this area? )</li>
        </ul>
      </Content>
    </Section>
  );
};

export default SightingDetails;
