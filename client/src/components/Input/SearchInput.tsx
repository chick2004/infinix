'use client';

import { useState } from 'react';

import styles from './SearchInput.module.css';
import Icon from '@/components/Icon/Icon';

export default function SearchInput({value = '', disabled = false}: {
    value?: string,
    disabled?: boolean
}) {

    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleClear = () => {
        setInputValue('');
    }

    return (
        <div className={`${styles.search_input} ${disabled ? styles.disabled : ''}`}>
            <input className={styles.input} type='search' disabled={disabled} value={inputValue} onChange={handleChange}/>
            {inputValue !== '' &&
            <button type="button" className={styles.input_button} onClick={handleClear}>
                <Icon name='dismiss' size={16} type='regular'></Icon>
            </button>
            }
            <button type="button" className={styles.input_button}>
                <Icon name='search' size={16} type='regular'></Icon>
            </button>
        </div>
    );
}