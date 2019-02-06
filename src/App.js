import * as React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import HooksIndexView from "./Hooks/HooksIndexView"
import ContextIndexView from "./Context/ContextIndexView"

const App = () => (
    <BrowserRouter>
        <>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/hooks'>Hooks</Link></li>
                    <li><Link to='/context'>Context</Link></li>
                </ul>
            </div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/hooks' component={HooksIndexView} />
                <Route path='/context' component={ContextIndexView} />
            </Switch>
        </>
    </BrowserRouter>
)

const Home = () => (
    <div>
        <h2
        >Welcome to React Code SandBox
        </h2>
    </div>
)

export default App