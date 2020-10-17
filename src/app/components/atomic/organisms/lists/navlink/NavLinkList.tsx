import React, { FC } from 'react';
import NavLinkLi from "../../../molecules/list-items/nav-link/NavLinkLi";

export interface NavLinkListChild {
    id: string,
    title: string,
    to: string
}

interface NavLinkListProps {
    className: string,
    children: NavLinkListChild[]
}

const NavLinkList: FC<NavLinkListProps> = ( { className, children }) =>
    <ul className={ className }>
        { children.map((child) => (
            <NavLinkLi to={ child.to } key={ child.id }  id={ child.id } title={ child.title }/>
        ))}
    </ul>;

export default NavLinkList;
