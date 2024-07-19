import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Contact from 'pages/Contact';
import Faq from 'pages/Faq';
import LearnReact from 'pages/LearnReact';

const App = () => {
    return (
        <>
            <Helmet>
                <title>React study</title>
            </Helmet>
            <main id="main" className="main">
                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/react" element={<LearnReact />} />
                </Routes>
            </main>{/* End #main */}
        </>
    );
}

export default App;
