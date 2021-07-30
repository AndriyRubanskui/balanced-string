import React from 'react';

function Child({ string, balanced }) {

    return (
        <div >
            <div>
                <h4>The string: <span className={balanced ? 'balanced-string' : 'disbalanced-string'}>{string}</span> - is {balanced ? 'balanced' : 'disbalanced'}</h4>
            </div>
        </div>
    );
}

export default Child;