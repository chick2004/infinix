import styles from './Icon.module.css';

export default function Icon({name, size = 24, type = 'filled', className = ''}: {
    name: string,
    size?: 16 | 20 | 24 | 28 | 32 | 48,
    type?: 'filled' | 'regular',
    className?: string
}) {
    const classes = `
        ${styles[`icon-size-${size}`]}
        ${styles[`icon-${type}`]}
        ${styles[`icon-ic_fluent_${name}_${size}_${type}`]}
        ${className}
        `;
    return (
        <i className={classes}></i>
    );
}
    ``