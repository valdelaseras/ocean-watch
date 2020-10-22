// TODO: this section on its own doesn't really exist ?

import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Sightings: FC = () => (
  <div>
    <Outlet />
  </div>
);

export default Sightings;
