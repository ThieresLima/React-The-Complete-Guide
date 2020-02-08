import React from 'react';

import styles from './Cockpit.module.css';

const cockpit = (props) => {

    let btnColor = styles.btn;
    if (props.showPersons) {
        btnColor = styles.btnRed;
    }

    const text = [];
    if (props.persons.length <= 2) {
        text.push(styles.red)
    }
    if (props.persons.length <= 1) {
        text.push(styles.bold)
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={text.join(' ')}>This is really working!</p>
            <button className={btnColor}
                onClick={props.clicked}>Switch</button>
        </div>
    )
};

export default cockpit;