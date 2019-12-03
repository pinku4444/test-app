import React from 'react';
import Header from './component/layout/Header';
import SubHeader from './component/layout/SubHeader'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Contact from './component/contact';
import Footer from './component/layout/footer';
import './App.scss'

function App() {
    return (
        <div>
            <Router>
                <Header />
                <SubHeader />
                <div className="main">
                    <Route path="/contact" >
                        <Contact />
                    </Route>
                </div>

                <Footer />

            </Router>

        </div>
    );
}

export default App;
