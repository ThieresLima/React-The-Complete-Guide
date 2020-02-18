import React, { useEffect, useRef } from 'react';

import styles from './Cockpit.module.css';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] userEffect');
        // HTTP request...
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpi.js] 2nd userEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    let btnColor = styles.btn;
    if (props.showPersons) {
        btnColor = styles.btnRed;
    }

    const text = [];
    if (props.personsLength <= 2) {
        text.push(styles.red)
    }
    if (props.personsLength <= 1) {
        text.push(styles.bold)
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={text.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnColor}
                onClick={props.clicked}>Switch</button>
        </div>
    )
};

export default React.memo(Cockpit);