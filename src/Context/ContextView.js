import React, { createContext } from "react"

const CounterContext = createContext()

class CounterProvider extends React.Component {
    constructor(props) {
        super(props)

        this.increment = this.increment.bind(this)

        this.state = {
            count: 0,
            increment: this.increment
        }
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <CounterContext.Provider value={this.state} >
                <p>
                    Provider: {this.state.count}
                </p>
                {this.props.children}
            </CounterContext.Provider>
        )
    }
}

const CounterConsumer = () => {
    return (
        <CounterContext.Consumer>
            {
                value => (
                    <>
                        <div>Consumer: {value.count}</div>
                        <button onClick={value.increment}>button</button>
                    </>
                )
            }
        </CounterContext.Consumer>
    )
}

const ContextView = () => {
    return (
        <CounterProvider>
            <CounterConsumer/>
        </CounterProvider>
    )
}

export default ContextView;