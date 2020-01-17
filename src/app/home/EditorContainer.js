import { connect } from 'react-redux';
import EditorComponent from './EditorComponent';
import { homeOperations } from './duck';

const mapStateToProps = state => {
    return {
        input: state.home.input,
        markedInput: state.home.markedInput,
        isMinimized: state.home.isMinimized
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (event) => {
            dispatch(homeOperations.handleChange(event.target.value));
        },
        handleMinimize: () => {
            dispatch(homeOperations.handleMinimize());
        }
    }
};

const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(EditorComponent);

export default EditorContainer;