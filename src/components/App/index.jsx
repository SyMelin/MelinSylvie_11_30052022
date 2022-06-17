import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home';
import Accomodation from '../../pages/Accomodation';
import About from '../../pages/About/index'
import Header from '../Header';
import Footer from '../Footer';
import Error from '../Error';

function App() {
    return [
        <Router>
            <Header />
            <Routes>
                <Route key="route-1-home" exact path="/" element={<Home />} />
                <Route key="route-2-accomodation" path="/accomodation/:accomodationId" element={<Accomodation />} />
                <Route key="route-3-about" path="/about" element={<About />} />
                <Route key="route-4-error" path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    ]
}

export default App