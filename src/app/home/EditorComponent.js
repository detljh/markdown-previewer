import React from 'react';
import PreviewContainer from './PreviewContainer';
import './editor.scss';
import ToolBar from './ToolBarContainer';

const EditorComponent = (props) => {
    const toolbarID = props.isMinimized ? 'toolbar-minimized' : 'toolbar-maximized';
    const toolBarIcon = !props.isMinimized ? 'min' : 'max';
    const editorClass = props.isMinimized ? 'editor-minimized' : 'editor-maximized';

    return (
        <div>
            <div className={editorClass}>
                <div id="editor-box">
                    <ToolBar text="Editor" icon={toolBarIcon} idType={toolbarID} 
                        handleMinimize={props.handleMinimize} />
                    <textarea id="editor" value={props.input} onChange={props.handleChange} />
                </div>
            
            <PreviewContainer input={props.markedInput} />
            </div>
        </div>
    );
}

export default EditorComponent;