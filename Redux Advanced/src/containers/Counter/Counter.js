import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangeHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState(prevState => ({ counter: prevState.counter + 1 }))
    //             break
    //         case 'dec':
    //             this.setState(prevState => ({ counter: prevState.counter - 1 }))
    //             break
    //         case 'add':
    //             this.setState(prevState => ({ counter: prevState.counter + value }))
    //             break
    //         case 'sub':
    //             this.setState(prevState => ({ counter: prevState.counter - value }))
    //             break;
    //         default:

    //     }
    // }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.addFive} />
                <CounterControl label="Subtract 5" clicked={this.props.subtractFive} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        addFive: () => dispatch(actionCreators.incrementFive(5)),
        subtractFive: () => dispatch(actionCreators.subtractFive(5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);