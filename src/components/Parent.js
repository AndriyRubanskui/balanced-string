import React, { useState, useEffect, useRef } from 'react';
import Child from './Child';


function Parrent() {
    let [text, setText] = useState('{{{some text{}}}()[]([])}');

    const [inputString, setInputString] = useState('');

    const [balanced, setBalanced] = useState();

    const ref = useRef();

    const isValid = (str) => {
        const stack = [];
        const bracketsMap = {
            ")": "(",
            "}": "{",
            "]": "["
        };
        const isClosedBracket = (ch) => Object.keys(bracketsMap).includes(ch);
        const isOpenedBracket = (ch) => Object.values(bracketsMap).includes(ch);

        for (let i = 0; i < str.length; i++) {
            const current = str[i];
            if (isClosedBracket(current)) {
                if (bracketsMap[current] !== stack.pop()) return setBalanced(false);
            } else if (isOpenedBracket(current)) {
                stack.push(current);
            }
        }

        return setBalanced(!stack.length);
    }

    useEffect(() => isValid(inputString), [text])

    const handleRememberString = (e) => {
        setInputString(e.target.value)
    }

    const handleChangeString = () => {
        setText(inputString)
        return ref.current.value = ''
    }


    return (
        <div className="text-container">
            <div className='string-manipulators'>
                <input type='text' name='newString' onChange={handleRememberString} ref={ref}></input>
                <button onClick={handleChangeString}>Change String</button>
            </div>
            <Child string={text} balanced={balanced} />
        </div>
    );
}

export default Parrent;