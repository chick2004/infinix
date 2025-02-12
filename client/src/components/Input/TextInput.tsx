'use client';
import React, { useState } from 'react';

import styles from './TextInput.module.css';

export default function TextInput({id, value = '', content_before, content_after, disabled = false}: {
    id?: string,
    value?: string,
    content_before?: React.ReactElement<{ className?: string }>,
    content_after?: React.ReactElement<{ className?: string }>,
    disabled?: boolean
}) {

    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={`${styles.text_input} ${disabled ? styles.disabled : ''}`}>
            {React.isValidElement(content_before) &&
                React.cloneElement(content_before as React.ReactElement<any>, { className: `${styles.sub_content} ${content_before.props.className || ''}` })
            }
            <input className={styles.input} type='text' disabled={disabled} id={id} value={inputValue} onChange={handleChange}/>
            {React.isValidElement(content_after) &&
                React.cloneElement(content_after as React.ReactElement<any>, { className: `${styles.sub_content} ${content_after.props.className || ''}` })
            }
        </div>
    );
}