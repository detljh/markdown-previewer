import Creators from './actions.js';
import marked from 'marked';

const handleChange = (input) => {
    return (dispatch, getState) => {
        const markedInput = marked(input);
        dispatch(Creators.handleChange(input, markedInput));
    };
}

const handleMinimize = () => {
    return (dispatch, getState) => {
        dispatch(Creators.handleMinimize(getState().isMinimized));
    }
}

export default {
    handleChange,
    handleMinimize
};