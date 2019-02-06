import React, { useState, useEffect } from "react"

const useCount = () => {
    const [count, setCount] = useState(0);

    // like componenDidMount, componentDidUpdate, componentWillUnmount
    useEffect(() => {
        document.title = `count ${count}`
    })

    return { count, setCount }
}

const UseEffectView = () => {
    const { count, setCount } = useCount()
    return (
        <div>
            <p>You clicked {count} times amd see document.title</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default UseEffectView;