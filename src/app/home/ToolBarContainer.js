import { connect } from 'react-redux';
import ToolBarComponent from './ToolBarComponent';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        isMinimized: state.home.isMinimized
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMinimize: () => {
            dispatch(homeOperations.handleMinimize());
        }
    }
}

const ToolBarContainer = connect(mapStateToProps, mapDispatchToProps)(ToolBarComponent);
export default ToolBarContainer;