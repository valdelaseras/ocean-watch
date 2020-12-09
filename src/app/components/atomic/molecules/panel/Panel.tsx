import React, { FC } from 'react';
import Fieldset from "../form/fieldset/Fieldset";

export interface PanelProps {
    id: string;
    content: string;
    remove: () => void;
}

const Panel: FC<PanelProps> = ( { id, content, remove } ) => (
    <div className="tip-panel" id={ id }>
        <Fieldset title="Tip">
            <div className="close-panel" onClick={ remove }>X</div>
                <p>
                    { content }
                </p>
        </Fieldset>
    </div>
);

export default Panel;
