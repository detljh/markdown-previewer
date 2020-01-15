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
                        <textarea id="editor" value={this.props.input} onChange={this.props.handleChange}>
                        </textarea>
                    </div>
                </div>
                <PreviewContainer input={this.props.input} />
            </div>
        );
    }
}

export default EditorComponent;