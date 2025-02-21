"use client";

import { useState, useEffect } from "react";

import styles from "./Input.module.css";

export function TextInput({ defaultValue = "", disable = false, placeholder, onChange }) {

    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const handleChange = (e) => {
        settValue(e.target.value);
        onChange?.(e.target.value);
    }

    return (
        <div className={styles.input_group}>
            <input type="text" value={value} disabled={disable} placeholder={placeholder} onChange={handleChange}/>
        </div>
    );
}