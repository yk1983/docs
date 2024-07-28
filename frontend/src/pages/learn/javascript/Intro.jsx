import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';

import PageTitle from 'layouts/PageTitle';

const Intro = () => {
    return(
        <>
            <Helmet>
                <title>Learn JavaScript</title>
            </Helmet>

            <PageTitle
                title="자바스크립트(JavaScript)"
                depth1="Learn"
                depth2="JavaScript"
                depth3="Introduction"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 자바스크립트 소개
                                </Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Intro;