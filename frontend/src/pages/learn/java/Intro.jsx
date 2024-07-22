import { Helmet } from 'react-helmet-async';

const Intro = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <div className="pagetitle">
                <h1>Java</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Pages</a></li>
                        <li className="breadcrumb-item">Learn</li>
                        <li className="breadcrumb-item active">Java</li>
                    </ol>
                </nav>
            </div> {/* End Page Title */}

            <section className="section">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Introduction</h5>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Intro;