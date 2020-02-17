import React, { Component } from 'react'
import styles from './Person.module.css'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import WithClass from '../../../hoc/withClass';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (    // React.Fragment pode ser uma alternativa para o Aux.
            <Auxiliary>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </Auxiliary>
        )
    }
};

export default WithClass(Person, styles.Person);