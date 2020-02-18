import React, { Component } from 'react'
import styles from './Person.module.css'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import WithClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (    // React.Fragment pode ser uma alternativa para o Aux.
            <Auxiliary>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}
                    ref={this.inputElementRef}
                    value={this.props.name}></input>
            </Auxiliary>
        )
    }
};

Person.propTypes = {    // npm install --save prop-types
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithClass(Person, styles.Person);