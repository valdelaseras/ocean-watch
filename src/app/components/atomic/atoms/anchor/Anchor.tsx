import React, { FC } from 'react';

interface AnchorProps {
  title: string;
  href: string;
}

const Anchor: FC<AnchorProps> = ({ title, href }) =>
    <a title={title} href={href}>
      {title}
    </a>;

export default Anchor;
