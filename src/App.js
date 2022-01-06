import { About, Faqs, Footer, Gallery, Homepage, Nav, Products } from './components'
import './styles/App.scss';
import {HashRouter as Router, Route} from 'react-router-dom'

function App() {
    return (
        <>
            <Router>
                <Nav /> 
                <div className="App">
                    <Route path="/" exact component={Homepage} />
                    <Route path="/products" component={Products} />
                    <Route path="/about" component={About} />
                    <Route path="/faqs" component={Faqs} />
                    <Route path="/gallery" component={Gallery} />
                    <Footer />
                </div>
            </Router>
        </>
    );
}   

export default App;


