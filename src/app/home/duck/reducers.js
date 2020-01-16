import types from './types.js';
import marked from 'marked';

const input = 
`# This is a header
## This is a sub header 
[This is a link](https://localhost:3000)

Use backticks to input in-line code \`<div></div>\`

\`\`\`
// Multi-line code block
    function() {
    return 'Hello World';
\`\`\`

 - Lists can be created this way:
    - item 1
        - item 2

> Blockquotes are also available

Put **emphasis** on your texts by making them **bold**

Or insert an _image_

![react-logo](https://goo.gl/Umyytc)

## Put your data into tables!
Column name | Column name |
------------|-------------|
Put your content in rows | and different columns |
Another row | last cell! |

Numbered lists:
1. number 1
2. number 2
`;

const markedInput = marked(input, {sanitize:true});
const INITIAL_STATE = {
    input: input,
    markedInput: markedInput
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.INPUT:
            return Object.assign({}, state, {
                input: action.input,
                markedInput: action.markedInput
            });
        default:       
            return state;
    };
};

export default homeReducer;