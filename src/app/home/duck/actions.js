import types from './types.js';

const handleChange = (input, markedInput) => {
    return {
        type: types.INPUT,
        input: input,
        markedInput: markedInput
    }
}

export default { 
    handleChange
};