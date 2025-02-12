import styles from './Button.module.css';
import React from 'react';

export default function Button({children, appearance = 'standard', disabled = false, className = '', onClick}: {
    children: React.ReactNode,
    appearance?: 'accent' | 'standard' | 'subtle',
    disabled?: boolean,
    className?: string,
    onClick?: () => void
}) {
    
    let type = ''
    let contain_text = false;
    let contain_icon = false;

    React.Children.forEach(children, (child) => {
        if (typeof child === 'string') {
            contain_text = true;
        }
        if (React.isValidElement(child)) {
            contain_icon = true;
        }
    });

    type = contain_text ? (contain_icon ? 'text-with-icon' : 'text-only') : 'icon-only';

    const classes = `
        ${styles[`button-${appearance}`]}
        ${styles[`button-${type}`]}
        ${className}
    `;

    return (
        <button className={classes} type='button' disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};