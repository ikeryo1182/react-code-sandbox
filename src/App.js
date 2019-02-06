import * as React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import HooksIndexView from "./Hooks/HooksIndexView"

const App = () => (
    <BrowserRouter>
        <>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/hooks'>Hooks</Link></li>
                </ul>
            </div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/hooks' component={HooksIndexView} />
            </Switch>
        </>
    </BrowserRouter>
)

const Home = () => (
    <div>
        <h2
        >Welcome to React Code Sandbox
        </h2>
    </div>
)

export default App