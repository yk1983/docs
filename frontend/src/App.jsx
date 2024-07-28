import { Routes, Route } from 'react-router-dom';
// HTML
import HtmlTags from 'pages/learn/html/Tags';
import HtmlGlobalAttributes from 'pages/learn/html/GlobalAttributes';
import HtmlEvents from 'pages/learn/html/Events';
// Java
import JavaIntro from 'pages/learn/java/Intro';
import JavaDataType from 'pages/learn/java/DataType';
import JavaInteger from 'pages/learn/java/Integer';
import JavaFloating from 'pages/learn/java/Floating';
import JavaCharacters from 'pages/learn/java/Characters';
import JavaBoolean from 'pages/learn/java/Boolean';
import JavaCasting from 'pages/learn/java/Casting';
import JavaOop from 'pages/learn/java/Oop';
// JavaScript
import JsIntro from 'pages/learn/javascript/Intro';
// React
import ReactIntro from 'pages/learn/react/Intro';
import ReactStarted from 'pages/learn/react/GetStarted';
import ReactTypeScript from 'pages/learn/react/AddTypeScript';
import ReactBootstrap from 'pages/learn/react/AddBootstrap';
import ReactRouter from 'pages/learn/react/AddRouter';
// pages
import Contact from 'pages/Contact';
import Faq from 'pages/Faq';

import "highlight.js/styles/github.css";

const App = () => {
    return (
        <>
            <main id="main" className="main">
                <Routes>
                    <Route path="/html/ref-tags" element={<HtmlTags />} />
                    <Route path="/html/ref-standardattributes" element={<HtmlGlobalAttributes />} />
                    <Route path="/html/ref-eventattributes" element={<HtmlEvents />} />
                    <Route path="/javascript/intro" element={<JsIntro />} />
                    <Route path="/java/intro" element={<JavaIntro />} />
                    <Route path="/java/datatype" element={<JavaDataType />} />
                    <Route path="/java/integer" element={<JavaInteger />} />
                    <Route path="/java/floating" element={<JavaFloating />} />
                    <Route path="/java/characters" element={<JavaCharacters />} />
                    <Route path="/java/boolean" element={<JavaBoolean />} />
                    <Route path="/java/casting" element={<JavaCasting />} />
                    <Route path="/java/oop" element={<JavaOop />} />
                    <Route path="/react/intro" element={<ReactIntro />} />
                    <Route path="/react/getstarted" element={<ReactStarted />} />
                    <Route path="/react/adding-typescript" element={<ReactTypeScript />} />
                    <Route path="/react/adding-bootstrap" element={<ReactBootstrap />} />
                    <Route path="/react/adding-router" element={<ReactRouter />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                </Routes>
            </main>{/* End #main */}
        </>
    );
}

export default App;