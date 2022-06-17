import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home';
import Accomodation from '../../pages/Accomodation';
import About from '../../pages/About/index'
import Header from '../Header';
import Footer from '../Footer';
import Error from '../Error';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/accomodation/:accomodationId" element={<Accomodation />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App