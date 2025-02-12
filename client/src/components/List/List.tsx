import styles from './List.module.css';

export default function List({children}: {
    children?: React.ReactNode,
    disabled?: boolean
}) {
    return (
        <ul className={styles.list}>
            {children}
        </ul>
    );
}