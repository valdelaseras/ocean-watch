import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const SightingDetails: FC = () => {
    const { id } = useParams();

    return (
        <h1>Sighting details of sighting: #{ id }</h1>
    );
};

export default SightingDetails;
