import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [increamentAmount, setIncreamentAmount] = useState(0)
    const addValue = Number(increamentAmount) || 0

    const resetAll = () => {
        setIncreamentAmount(0)
        dispatch(reset())
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type="text"
                value={increamentAmount}
                onChange={(e) => setIncreamentAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>
                    add amount
                </button>
                <button onClick={resetAll}>reset</button>
            </div>
        </section>
    )
}

export default Counter
