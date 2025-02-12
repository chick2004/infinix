'use client';

import { useState } from 'react';
import styles from './Checkbox.module.css';

export default function Checkbox({label, checked = false}: {
    label: string,
    checked?: boolean
}) {

    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
        setIsChecked(pre => !pre);
    }

    return (
        <label className={styles.label}> 
            <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange={handleChange}/>
            <span>{label}</span>
        </label>
    );
}
