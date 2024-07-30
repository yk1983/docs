import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';

const Conditional = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="반복문(Iteration Statements)"
                depth1="Learn"
                depth2="Java"
                depth3="Iteration Statements"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 반복문<sup>iteration statements</sup>
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

export default Conditional;