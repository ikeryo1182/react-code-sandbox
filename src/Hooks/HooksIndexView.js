import UseStateView from "./UseStateView"
import UseEffectView from "./UseEffectView"
import UseContextView from "./useContextView"
import UseReducerView from "./useReducerView"
import { Route, Link, Switch } from 'react-router-dom'

const HooksIndexView = () => (
    <div>
        <div>
            <ul style={{ marginLeft: "10px" }}>
                <li><Link to='/hooks/useState'>useState</Link></li>
                <li><Link to='/hooks/useEffect'>useEffect</Link></li>
                <li><Link to='/hooks/useContext'>useContext</Link></li>
                <li><Link to='/hooks/useReducer'>useReducer</Link></li>
            </ul>
        </div>
        <Switch>
            <Route exact path='/hooks'>
                <p>Hello ReactHooks!</p>
            </Route>
            <Route path='/hooks/useState' component={UseStateView} />
            <Route path='/hooks/useEffect' component={UseEffectView} />
            <Route path='/hooks/useContext' component={UseContextView} />
            <Route path='/hooks/useReducer' component={UseReducerView} />
        </Switch>
    </div >
)

export default HooksIndexView;