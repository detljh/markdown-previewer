import types from './types.js';

const handleChange = (input) => {
    return {
        type: types.INPUT,
        input: input
    }
}

export default { 
    handleChange
};