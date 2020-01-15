import React from 'react';

class PreviewComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-7">
                <div id="preview">
                <p>{this.props.input}</p>
                </div>
            </div>
        )
    }
}

export default PreviewComponent;