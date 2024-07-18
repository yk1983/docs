import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import Header from 'components/Header';
import Aside from 'components/Aside';
import Footer from 'components/Footer';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Header />
            <Aside />
            <App />
            <Footer />
        </HelmetProvider>
    </React.StrictMode>
);