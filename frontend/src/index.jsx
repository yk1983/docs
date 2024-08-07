import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from 'layouts/ExtHeader';
import Aside from 'layouts/ExtAside';
import Footer from 'layouts/ExtFooter';
import App from 'App';
// JsonData
import Menu from 'data/layouts/menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Header />
                <Aside arrObjs={ Menu } recLink={ '' } />
                <App />
                <Footer />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);