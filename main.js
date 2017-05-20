import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';

import Login from './src/components/login/login.jsx';
import DemandPage from './src/components/demandPage/demandPage.jsx';
import DemandSupplyPage from './src/components/demandSupplyPage/demandSupplyPage.jsx';


class App extends React.Component{
    render(){
        return(<HashRouter>
            <div className="divClass">
                <Route exact path='/' component={Login}/>
                <Route path='/demand' component={DemandPage}/>
                <Route path='/demandsupply' component={DemandSupplyPage}/>
            </div>
        </HashRouter>)
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));