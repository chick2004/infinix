import { useId } from 'react';
import React from 'react';

import styles from './Field.module.css';
import Icon from '@/components/Icon/Icon';

export default function Field({children, label, validation_state = 'info', validation_message}: {
    children: React.ReactElement<{ id?: string }>,
    label?: string,
    validation_state?: 'info' | 'success' | 'warning' | 'error',
    validation_message?: string
}) {

    const id = useId();
    let validation_icon;

    switch (validation_state) {
        case 'success':
            validation_icon = <Icon name='checkmark_circle' size={16} type='filled' className='text-system-success'/>;
            break;
        case 'warning':
            validation_icon = <Icon name='warning' size={16} type='filled' className='text-system-caution'/>;
            break;
        case 'error':
            validation_icon = <Icon name='dismiss_circle' size={16} type='filled' className='text-system-critical'/>;
            break
        default:
            validation_icon = <Icon name='info' size={16} type='filled' className='text-system-attention'/>;
            break;
    }

    return (
        <div className={styles.field}>
            {label && <label className={styles.label} htmlFor={id}>{label}</label>}
            {children && React.cloneElement(children, { id })}
            {validation_message && 
            <p className={styles.validation_message}>
                {validation_icon}
                {validation_message}
            </p>}
        </div>
    );
}