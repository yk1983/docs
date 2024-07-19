import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import LearnReact from 'pages/LearnReact';
import Contact from 'pages/Contact';
import Faq from 'pages/Faq';

const App = () => {
    return (
        <>
            <Helmet>
                <title>React study</title>
            </Helmet>
            <main id="main" className="main">
                <Routes>
                    <Route path="/react" element={<LearnReact />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>
            </main>{/* End #main */}
        </>
    );
}

export default App;
