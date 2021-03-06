import React, { useState, useEffect } from "react"

const useCount = () => {
    const [count, setCount] = useState(0);

    // like componentDidMount
    useEffect(() => {
        document.title = `count ${count}`
        console.log("componnentDidMount")
    }, [])

    // like componentDidUpdate
    useEffect(() => {
        console.log("componentDidUpdate")
    },[count])

    return { count, setCount }
}

const UseEffectView = () => {
    const { count, setCount } = useCount()
    return (
        <div>
            <h1>useEffect</h1>
            <p>You clicked {count} times amd see document.title</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default UseEffectView;