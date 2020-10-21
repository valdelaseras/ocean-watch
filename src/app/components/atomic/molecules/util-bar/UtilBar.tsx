// Utility bar for, for example, top of feed.
// Holds components like select elements and search inputs to filter feed

// Might use it elsewhere as well but in the feed, a user can filter feed in util bar by:
// - region
// - latest / oldest
// - species
// - maybe popularity(?)

import React, { FC } from 'react';

export interface UtilBarProps {
  className: string;
}

const UtilBar: FC<UtilBarProps> = ({ className, children }) => (
  <div className={'util-bar ' + className}>
    <ul className="util-list">
      {/*list items with children utility elements here*/}
      {children}
    </ul>
  </div>
);

export default UtilBar;
