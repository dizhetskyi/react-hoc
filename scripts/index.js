import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const counter = (state = 15, action) => {
  switch (action.type){
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

let Counter = ({counter, inc, dec}) => (
  <div>
    <button onClick={inc}>Inc</button>
    <button onClick={dec}>Dec</button>
    <div>{counter}</div>
  </div>
)

const stateToProps = state => ({
  counter: state
})

const dispatchToProps = dispatch => ({
  inc: () => dispatch({type: 'INC'}),
  dec: () => dispatch({type: 'DEC'})
})

Counter = connect(stateToProps, dispatchToProps)(Counter);

const Root = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)

render(<Root />, document.getElementById('app'));