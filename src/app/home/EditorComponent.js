import React from 'react';
import PreviewContainer from './PreviewContainer';

class EditorComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-5">
                    <div id="editor-box">
                        <textarea id="editor">

                        </textarea>
                    </div>
                </div>
                <PreviewContainer />
            </div>
        );
    }
}

export default EditorComponent;