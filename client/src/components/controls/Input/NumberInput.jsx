"use client";

import { useState, useEffect, useCallback } from "react";
import { Icon } from "@/components/utilities/Icon/Icon";
import styles from "./Input.module.css";

export function NumberInput({ defaultValue, disable = false, placeholder, min, max, step = 1, onChange }) {
    
    const [value, setValue] = useState(parseInt(defaultValue) || 0);

    useEffect(() => {
        setValue(parseInt(value) || 0);
    }, [value]);

    const clamp = useCallback((val) => {
        if (max !== undefined) val = Math.min(val, max);
        if (min !== undefined) val = Math.max(val, min);
        return val;
    }, [min, max]);

    const handleChange = useCallback((e) => {
        let newValue = parseInt(e.target.value) || 0;
        newValue = clamp(newValue);
        setValue(newValue);
        onChange?.(newValue);
    }, [clamp, onChange]);

    const handleIncrement = useCallback(() => {
        setValue((prev) => {
            let newValue = clamp(prev + step);
            onChange?.(newValue);
            return newValue;
        });
    }, [clamp, onChange, step]);

    const handleDecrement = useCallback(() => {
        setValue((prev) => {
            let newValue = clamp(prev - step);
            onChange?.(newValue);
            return newValue;
        });
    }, [clamp, onChange, step]);

    return (
        <div className={styles.input_group}>
            <input type="number" value={value} disabled={disable} placeholder={placeholder} onChange={handleChange}/>
            <button type="button" className={styles.input_button} onClick={handleIncrement}>
                <Icon name="chevron_up" size={16} type="regular" />
            </button>
            <button type="button" className={styles.input_button} onClick={handleDecrement}>
                <Icon name="chevron_down" size={16} type="regular" />
            </button>
        </div>
    );
}
