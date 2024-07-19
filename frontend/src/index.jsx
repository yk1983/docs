import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from 'components/Header';
import Aside from 'components/Aside';
import Footer from 'components/Footer';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Header />
                <Aside />
                <App />
                <Footer />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);