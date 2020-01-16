import types from './types.js';

const handleChange = (input, markedInput) => {
    return {
        type: types.INPUT,
        input: input,
        markedInput: markedInput
    };
}

const handleMinimize = (isMinimized) => {
    return {
        type: types.MINIMIZE,
        isMinimized: isMinimized
    };
}

export default { 
    handleChange,
    handleMinimize
};