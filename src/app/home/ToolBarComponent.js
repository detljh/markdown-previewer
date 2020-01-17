import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { faWindowMinimize, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import './toolbar.scss';

const ToolBarComponent = (props) => {
    const icon = props.icon == 'min' ? faWindowMinimize : faWindowMaximize;

    return (
        <div className='toolbar' id={props.idType}>
            <FontAwesomeIcon icon={faMarkdown} id="markdown-logo" />
            <p id="toolbar-text">{props.text}</p>
            <FontAwesomeIcon icon={icon} id="minimize" onClick={props.handleMinimize} />
        </div>
    );
}

export default ToolBarComponent;