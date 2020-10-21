// Util bar component
// Sighting components ( in list )

// A feed may consist of:
// - users own sighting submissions
// - all sightings
// - filtered sightings ( though technically almost all feeds consist of filtered sightings in one way or another )

// - are comments on a sighting also a feed? I would think so

import React, { FC } from 'react';
import UtilBar from '../../molecules/util-bar/UtilBar';

export interface FeedProps {
  title?: string;
}

const Feed: FC<FeedProps> = ({ children }) => (
  <div className="column feed">
    <UtilBar />
    {/*feed this a 'feed-list' with components*/}
    {children}
  </div>
);

export default Feed;
