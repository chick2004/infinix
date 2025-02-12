import styles from './ListItem.module.css';

export default function ListItem({children, key, disabled = false, is_active = false}: {
    children?: React.ReactNode,
    key?: string,
    disabled?: boolean,
    is_active?: boolean
}) {
    return (
        <li key={key} className={`${styles.list_item} ${is_active ? styles.active : ''}`}>
            {children}
        </li>
    );
}