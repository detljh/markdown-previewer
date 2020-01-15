import Creators from './actions.js';
import marked from 'marked';

const handleChange = (input) => {
    return (dispatch, getState) => {
        const markedInput = marked(input, {sanitize: true});
        console.log(markedInput);
        dispatch(Creators.handleChange(input, markedInput));
    };
}

export default {
    handleChange
};