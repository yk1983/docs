import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';

import PageTitle from 'layouts/PageTitle';

const AddBootstrap = () => {
    return(
        <>
            <Helmet>
                <title>Learn React</title>
            </Helmet>

            <PageTitle
                title="Adding Bootstrap(Bootstrap 적용)"
                depth1="Learn"
                depth2="React"
                depth3="Bootstrap"
            />

            <section className="section">

            </section>
        </>
    );
}

export default AddBootstrap;