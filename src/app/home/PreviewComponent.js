import React from 'react';
import './preview.scss'

const PreviewComponent = (props) => {
    return (
        <div id="preview-box">
            <div id="preview" dangerouslySetInnerHTML={{__html: props.input}} />
        </div>
        
    );
}

export default PreviewComponent;