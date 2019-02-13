import InfiniteScrollView from "./InfiniteScrollView"
import { Route, Link, Switch } from 'react-router-dom'

const HooksIndexView = () => (
    <div>
        <div>
            <ul style={{ marginLeft: "10px" }}>
                <li><Link to='/omnibus/infinite-scroll'>InfiniteScroll</Link></li>
            </ul>
        </div>
        <Switch>
            <Route exact path='/omnibus'>
                <p>Hello Omnibus!</p>
            </Route>
            <Route path='/omnibus/infinite-scroll' component={InfiniteScrollView} />
        </Switch>
    </div >
)

export default HooksIndexView;