import React, { Fragment } from 'react'

export default function Counter({count,onIncrement,onDecremnt}) {
  return (
    <Fragment>
        <h1>{count}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecremnt}>Decrement</button>
    </Fragment>
  )
}
