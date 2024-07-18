const Footer = () => {
    return(
        <>
            {/* ======= Footer ======= */}
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: https://bootstrapmade.com/license/ */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </footer>{/* End Footer */}

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    );
}

export default Footer;