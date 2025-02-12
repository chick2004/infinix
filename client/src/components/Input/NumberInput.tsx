'use client';
import { useState } from 'react';

import styles from './Input.module.css';
import Icon from '@/components/Icon/Icon';

export default function NumberInput({id, value = 0, min, max, step = 1, disabled = false}: {
    id?: string,
    value?: number,
    min?: number,
    max?: number,
    step?: number,
    disabled?: boolean
}) {

    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(pre => {
            if (max !== undefined && parseInt(e.target.value) > max) {
                return pre;
            }
            if (min !== undefined && parseInt(e.target.value) < min) {
                return pre;
            }
            if (e.target.value === '') {
                return 0;
            }
            return parseInt(e.target.value);
        });
    }

    const handleIncrement = () => {
        setInputValue(pre => {
            if (max !== undefined && pre + step > max) {
                return pre;
            }
            return pre + step;
        });
    }

    const handleDecrement = () => {
        setInputValue(pre => {
            if (min !== undefined && pre - step < min) {
                return pre;
            }
            return pre - step;
        });
    }

    return (
        <div className={`${styles.input_group} ${disabled ? styles.disabled : ''}`}>
            <input className={styles.input} type='number' disabled={disabled} id={id} value={inputValue} onChange={handleChange}/>
            <button type="button" className={styles.input_button} onClick={handleIncrement}>
                <Icon name='chevron_up' size={16} type='regular'></Icon>
            </button>
            <button type="button" className={styles.input_button} onClick={handleDecrement}>
                <Icon name='chevron_down' size={16} type='regular'></Icon>
            </button>
        </div>
    );
}