import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';


class App extends Component {
    render() {
        const { CounterActions, number } = this.props;

        
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter
    }),
    (dispatch) => ({
        // CounterActions: bindActionCreators(counterActions, dispatch)
        CounterActions: {
        increment: () => {
            console.log('App.js에서 인크리먼트')
            return dispatch(counterActions.increment())
        },
        decrement: () => {
            console.log('App.js에서 디크리먼트')
            return dispatch(counterActions.decrement())
        }
    }
    })
)(App);