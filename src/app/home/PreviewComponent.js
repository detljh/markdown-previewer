import React from 'react';

const PreviewComponent = (props) => {
    return (
        <div className="col-sm-7">
            <div id="preview" dangerouslySetInnerHTML={{__html: props.input}} />
        </div>
    );
}

export default PreviewComponent;