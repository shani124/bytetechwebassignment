import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment } from '../../reducers/counterSlice';
import './counter.css';
import Button from '@mui/material/Button';
const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
      <div>
        
        <Button variant="contained" style={{marginLeft:10}} onClick={()=>dispatch(increment())}>Increment</Button>      
        <span style={{marginLeft:10}}>{count}</span>       
        <Button variant="contained" style={{marginLeft:10}} onClick={() => dispatch(decrement())}>Decrement</Button>     
         
        
      </div>
    </div>
    );
}

export default Counter;
