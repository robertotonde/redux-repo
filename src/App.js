import React from "react";

import {useSelector,useDispatch } from 'react-redux'

import { decrement, increment } from './actions';


function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  const dispatch = useDispatch()

  return (
    <div className="App">
     <h1> conuter {counter} </h1>

    <button  onClick={()=> dispatch(increment(5))}>  +</button>
    <button  onClick={() => dispatch(decrement())}> - </button>
       
       { isLogged ? <h1> valuable info</h1> : ''}


    </div>
  );
}

export default App;
