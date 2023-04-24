import React from "react";
import styles from "../../styles/styles";

export function PageTemplate(props: any) {
    return (
        <div style={styles.MainPageBackground}>
            <div className="container min-vh-100 d-flex flex-column justify-content-between align-content-center">
                {props.children}
            </div>
        </div>
    )
}