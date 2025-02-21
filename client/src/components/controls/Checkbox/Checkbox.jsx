"use client";

import { useState } from "react";

import styles from "./Checkbox.module.css";

export function Checkbox({label = "", checked = false, onChange}) {

    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange?.(newChecked);
    }

    return (
        <label className={styles.label} onChange={handleChange}> 
            <input className={styles.checkbox} type="checkbox" checked={isChecked}/>
            <span>{label}</span>
        </label>
    );
}
