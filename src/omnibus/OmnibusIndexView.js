import OmnibusView from "./OmnibusView"
import { Route, Switch } from 'react-router-dom'

const HooksIndexView = () => (
    <div>
        <Switch>
            <Route path='/omnibus' component={OmnibusView} />
        </Switch>
    </div >
)

export default HooksIndexView;