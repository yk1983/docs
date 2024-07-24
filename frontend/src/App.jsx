import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import HtmlTagList from 'pages/learn/html/TagList';
import JavaIntro from 'pages/learn/java/Introduction';
import JavaDataType from 'pages/learn/java/DataType';
import JavaIntegerType from 'pages/learn/java/IntegerType';
import JavaFloatingType from 'pages/learn/java/FloatingType';
import JavaCharactersType from 'pages/learn/java/CharactersType';
import JavaBooleanType from 'pages/learn/java/BooleanType';
import JavaCasting from 'pages/learn/java/Casting';

import ReactIntro from 'pages/learn/react/Introduction';

import Contact from 'pages/Contact';
import Faq from 'pages/Faq';

const App = () => {
    return (
        <>
            <Helmet>
                <title>Learn</title>
            </Helmet>
            <main id="main" className="main">
                <Routes>
                    <Route path="/html-tags" element={<HtmlTagList />} />
                    <Route path="/java-intro" element={<JavaIntro />} />
                    <Route path="/java-datatype" element={<JavaDataType />} />
                    <Route path="/java-integer-type" element={<JavaIntegerType />} />
                    <Route path="/java-floating-type" element={<JavaFloatingType />} />
                    <Route path="/java-characters-type" element={<JavaCharactersType />} />
                    <Route path="/java-boolean-type" element={<JavaBooleanType />} />
                    <Route path="/java-casting" element={<JavaCasting />} />
                    <Route path="/react-intro" element={<ReactIntro />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>
            </main>{/* End #main */}
        </>
    );
}

export default App;
