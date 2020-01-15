import React from 'react';
import PreviewContainer from './PreviewContainer';
import ColumnResizer from "react-column-resizer";

const EditorComponent = (props) => {
    return (
        <div className="row">
            <div className="col-sm-5">
                <div id="editor-box">
                    <textarea id="editor" value={props.input} onChange={props.handleChange}>
                    </textarea>
                </div>
            </div>
            <PreviewContainer input={props.markedInput} />
        </div>
    );
}

export default EditorComponent;