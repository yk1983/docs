import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>DocsAdmin</span></strong>. All Rights Reserved
                </div>
                <div className="credits"></div>
            </footer>{/* End Footer */}

            <Link to="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </Link>
        </>
    );
}

export default Footer;