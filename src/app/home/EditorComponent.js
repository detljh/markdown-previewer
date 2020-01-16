import React from 'react';
import PreviewContainer from './PreviewContainer';
import './editor.scss';
import ToolBar from './ToolBarComponent';

const EditorComponent = (props) => {
    return (
        <div>
            <div>
                <div id="editor-box">
                    <ToolBar />
                    <textarea id="editor" value={props.input} onChange={props.handleChange} />
                </div>
            
            <PreviewContainer input={props.markedInput} />
            </div>
        </div>
    );
}

export default EditorComponent;