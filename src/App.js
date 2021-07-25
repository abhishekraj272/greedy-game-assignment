import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Analytics from './Pages/Analytics/Analytics';
import { Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Switch>
                <Route path="/analytics" component={Analytics} />
                <Route path="/" component={Landing} />
            </Switch>
        </div>
    );
}

export default App;
