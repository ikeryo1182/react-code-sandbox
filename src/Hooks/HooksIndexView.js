import UseStateView from "./UseStateView"
import { Route, Link, Switch } from 'react-router-dom'

const HooksIndexView = () => (
    <div>
        <div>
            <ul style={{ marginLeft: "10px" }}>
                <li><Link to='/hooks/useState'>useState</Link></li>
            </ul>
        </div>
        <Switch>
            <Route exact path='/hooks'>
                <p>Hello ReactHooks!</p>
            </Route>
            <Route path='/hooks/useState' component={UseStateView} />
        </Switch>
    </div >
)

export default HooksIndexView;