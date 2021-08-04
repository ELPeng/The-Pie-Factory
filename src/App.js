import Homepage from './components/Homepage'
import Nav from './components/Nav'
import Products from './components/Products'
import About from './components/About'
import Faqs from './components/Faqs'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css';
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


