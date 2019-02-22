import ContextView from "./ContextView"
import { Route, Switch } from 'react-router-dom'

const HooksIndexView = () => (
    <div>
        <Switch>
            <Route exact path='/context' component={ContextView} />
        </Switch>
    </div >
)

export default HooksIndexView;