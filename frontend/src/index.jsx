import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from 'layouts/Header';
import Aside from 'layouts/Aside';
import Footer from 'layouts/Footer';
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