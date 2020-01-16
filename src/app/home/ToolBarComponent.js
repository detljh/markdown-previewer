import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { faWindowMinimize, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import './toolbar.scss';

const ToolBarComponent = (props) => {
    return (
        <div className="toolbar">
            <FontAwesomeIcon icon={faMarkdown} id="markdown-logo" />
            Editor
            <FontAwesomeIcon icon={faWindowMinimize} id="minimize" onClick={props.handleMinimize} />
        </div>
    );
}

export default ToolBarComponent;