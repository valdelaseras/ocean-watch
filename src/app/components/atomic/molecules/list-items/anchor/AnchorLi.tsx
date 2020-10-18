import React, { FC } from 'react';
import Anchor from '../../../atoms/anchor/Anchor';
import { AnchorProps } from '../../../atoms/anchor/Anchor';

const AnchorLi: FC<AnchorProps> = ({ title, href }) => (
  <li>
    <Anchor title={title} href={href} />
  </li>
);

export default AnchorLi;
