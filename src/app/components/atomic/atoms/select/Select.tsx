import React, { FC } from 'react';

export interface SelectChild {
    id: string,
    title: string
}

interface SelectProps {
    id: string,
    title?: string,
    required: boolean | undefined,
    text?: string,
    defaultValue: string,
    name: string,
    children: SelectChild[]
}

const Select: FC<SelectProps> = ( { id, title, required, text, name, defaultValue, children } ) =>
    <label htmlFor={ id }>
        { title }{required ? ' *' : null}
        {text ? <p>{text}</p> : null}
        <select id={id}
                required={required}
                name={name}
                defaultValue={defaultValue}>
                { children.map((child) => (
                    <option key={ child.id } value={ child.title }>
                        { child.title }
                    </option>
                ))}
        </select>
    </label>
;

export default Select;
