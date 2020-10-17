import React, { FC } from 'react';
import Button from "../../../atoms/button/Button";

interface ButtonLiProps {
    type: 'button' | 'submit' | 'reset' | undefined;
    title: string,
    btnClass: string,
    disabled: boolean | undefined;
}

const ButtonLi: FC<ButtonLiProps> = ({ type,title, btnClass, disabled }) =>
    <li>
        <Button type={ type } title={ title } btnClass={ btnClass } disabled={ disabled }/>
    </li>;

export default ButtonLi;
