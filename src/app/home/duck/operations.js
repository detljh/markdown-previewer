import Creators from './actions.js';

const handleChange = (input) => {
    return (dispatch, getState) => {
        dispatch(Creators.handleChange(input));
    };
}

export default {
    handleChange
};