"use client";

import React, { useMemo } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

export function Button({children, appearance = "standard", disabled = false, onClick}) {

    const type = useMemo(() => {
        
        const has_text = React.Children.toArray(children).some(child => typeof child === "string");
        const has_icon = React.Children.toArray(children).some(child => React.isValidElement(child));

        return has_text ? (has_icon ? "text-with-icon" : "text-only") : "icon-only";

    }, [children]);

    const classes = clsx(
        styles[`button-${appearance}`],
        styles[`button-${type}`]
    );

    return (
        <button className={classes} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );

};