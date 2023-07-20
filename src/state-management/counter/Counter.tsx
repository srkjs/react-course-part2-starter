import { useReducer, useState } from 'react';
import useCounterStore from './store';

const Counter = () => {
  const store = useCounterStore();

  return (
    <div>
      Counter ({store.counter})
      <button
        onClick={() => store.increment()}
        className='btn btn-primary mx-1'
      >
        Increment
      </button>
      <button onClick={() => store.reset()} className='btn btn-primary mx-1'>
        Reset
      </button>
    </div>
  );
};

export default Counter;
