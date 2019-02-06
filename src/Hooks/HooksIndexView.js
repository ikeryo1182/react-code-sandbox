import UseStateView from "./UseStateView"
import UseEffectView from "./UseEffectView"
import useContextView from "./useContextView"
import { Route, Link, Switch } from 'react-router-dom'

const HooksIndexView = () => (
    <div>
        <div>
            <ul style={{ marginLeft: "10px" }}>
                <li><Link to='/hooks/useState'>useState</Link></li>
                <li><Link to='/hooks/useEffect'>useEffect</Link></li>
                <li><Link to='/hooks/useContext'>useContext</Link></li>
            </ul>
        </div>
        <Switch>
            <Route exact path='/hooks'>
                <p>Hello ReactHooks!</p>
            </Route>
            <Route path='/hooks/useState' component={UseStateView} />
            <Route path='/hooks/useEffect' component={UseEffectView} />
            <Route path='/hooks/useContext' component={useContextView} />
        </Switch>
    </div >
)

export default HooksIndexView;