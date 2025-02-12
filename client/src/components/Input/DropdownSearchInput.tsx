'use client';

import { useState, useEffect, useRef } from 'react';

import styles from './DropdownSearchInput.module.css';
import Icon from '@/components/Icon/Icon';

export default function DropdownSearchInput({ suggestions, value = '', disabled = false }: {
    suggestions?: Array<any>,
    value?: string,
    disabled?: boolean,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState(value);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleClear = () => {
        setSearchValue('');
    }

    const handleFocus = () => {
        if (suggestions) {
            setIsOpen(true);
        }
    }

    const handleSelect = (value: string) => {
        setSearchValue(value);
        setIsOpen(false);
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdown_search_input} ref={containerRef}>
            <div className={`${styles.input_group} ${disabled ? styles.disabled : ''} ${isOpen ? styles.opened : ''}`}>
                <input className={styles.input} type='search' disabled={disabled} value={searchValue} onChange={handleChange} onFocus={handleFocus}/>
                {searchValue !== '' &&
                <button type="button" className={styles.input_button} onClick={handleClear}>
                    <Icon name='dismiss' size={16} type='regular'></Icon>
                </button>
                }
                <button type="button" className={styles.input_button} onClick={() => setIsOpen(false)}>
                    <Icon name='search' size={16} type='regular'></Icon>
                </button>
            </div>

            {isOpen && 
                <ul className={styles.list}>
                    {
                        suggestions && suggestions.map((value: any, index: number) => {
                            return <li key={index} className={styles.list_item} onClick={() => handleSelect(value)}>{value}</li>
                        })
                    }
                </ul>
            }
        </div>
    );
};