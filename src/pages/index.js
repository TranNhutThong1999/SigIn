import {Route, Switch} from "react-router-dom";
import 'antd/dist/reset.css';
import NotFound from "./404";
import Login from '../pages/login'
const Pages = () => {
    return<Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/">
                <NotFound/>
            </Route>
        </Switch>
}

export default Pages