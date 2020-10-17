import React, { FC } from 'react';
import Anchor from "../../../atoms/anchor/Anchor";

interface AnchorLiProps {
    title: string,
    href: string
}

const AnchorLi: FC<AnchorLiProps> = ({ title, href }) =>
    <li>
        <Anchor title={title} href={href}/>
    </li>;

export default AnchorLi;
