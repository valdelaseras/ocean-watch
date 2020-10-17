import React, { FC } from 'react';
import AnchorLi from "../../../molecules/list-items/anchor/AnchorLi";

interface AnchorListChild {
    title: string,
    href: string
}

interface AnchorListProps {
    className: string
    children: AnchorListChild[]
}

const AnchorList: FC<AnchorListProps> = ({ className, children }) =>
    <ul className={ className }>
        { children.map((child) => (
            <AnchorLi title={ child.title } href={ child.href }/>
        ))}
    </ul>;

export default AnchorList;
