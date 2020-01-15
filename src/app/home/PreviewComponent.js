import React from 'react';

class PreviewComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-7">
                <div id="preview" dangerouslySetInnerHTML={{__html: this.props.input}} />
            </div>
        )
    }
}

export default PreviewComponent;