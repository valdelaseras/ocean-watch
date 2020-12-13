import { User } from '../model/User';
import { Sighting } from '../model/Sighting';
import { Organism } from '../model/Organism';

import { stubCurrentUserSightings } from './currentUserSightings';

export const stubCurrentUser = new User(
  '1',
  'Empress',
  'dolphins@sea.co.nz',
  124,
  '/assets/images/dolphin.png',
  stubCurrentUserSightings,
);
