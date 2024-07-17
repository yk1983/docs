import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from 'components/Header';
import Aside from 'components/Aside';
import Footer from 'components/Footer';
import App from 'App';
// Vendor CSS Files
import 'assets/vendor/bootstrap/css/bootstrap.min.css';
import 'assets/vendor/bootstrap-icons/bootstrap-icons.css';
import 'assets/vendor/boxicons/css/boxicons.min.css';
import 'assets/vendor/quill/quill.snow.css';
import 'assets/vendor/quill/quill.bubble.css';
import 'assets/vendor/remixicon/remixicon.css';
import 'assets/vendor/simple-datatables/style.css';
// Template Main CSS File
import 'assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <Aside />
        <App />
        <Footer />
    </React.StrictMode>
);