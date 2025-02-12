'use client'
import React, { useState } from 'react';

import styles from './PasswordInput.module.css';
import Icon from '@/components/Icon/Icon';

export default function PasswordInput({id, value = '', disabled = false}: {
    id?: string,
    value?: string,
    disabled?: boolean
}) {
    
    const [inputValue, setInputValue] = useState(value);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(pre => !pre);
    }

    return (
        <div className={`${styles.password_input} ${disabled ? styles.disabled : ''}`}>
            <input className={styles.input} type={showPassword ? 'text' : 'password'} disabled={disabled} id={id} value={inputValue} onChange={handleChange}/>
            <button type="button" className={styles.toggle_type_button} onClick={handleShowPassword}>
                <Icon name={showPassword ? 'eye_off' : 'eye'} size={16} type='regular'></Icon>
            </button>
        </div>
    );
}