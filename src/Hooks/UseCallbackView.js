import React, { useState, useCallback } from "react"

const useCount = () => {
    const [count, setCount] = useState(0);

    return { count, setCount }
}

const UseCallbackView = () => {
    const { count: count1, setCount: setCount1 } = useCount()
    const { count: count2, setCount: setCount2 } = useCount()

    const doubledValueFunction1 = useCallback(() => {
        return count1 * 2;
    }, [count1])

    const doubledValueFunction2 = useCallback(() => {
        return count2 * 2;
    }, [count2])

    const handleClickCounter1 = useCallback(() => {
        setCount1(count1 + 1)
        console.log("called1");
    }, [count1])

    const handleClickCounter2 = useCallback(() => {
        setCount2(count2 + 1)
        console.log("called2");
    }, [count2])

    return (
        <div>
            <h1>useCallback</h1>
            <p>Count1 {count1}</p>
            <p>DoubleCount1 {doubledValueFunction1()}</p>
            <button onClick={setCount1((old) => old + 1)}>
                Click me
            </button>
            <h1>useCallback</h1>
            <p>Count2 {count2}</p>
            <p>DoubleCount2 {doubledValueFunction2()}</p>
            <button onClick={handleClickCounter2}>
                Click me
            </button>
        </div>
    )
}

export default UseCallbackView;