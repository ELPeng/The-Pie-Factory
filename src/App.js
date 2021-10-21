import { About, Faqs, Footer, Gallery, Homepage, Nav, Products } from './components'
import './styles/App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <>
        <Router>
            <Nav /> 
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/products" component={Products} />
                    <Route path="/about" component={About} />
                    <Route path="/faqs" component={Faqs} />
                    <Route path="/gallery" component={Gallery} />
                </Switch>
            <Footer />
            </div>
        </Router>
        </>
    );
}   

export default App;


