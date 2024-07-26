import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table } from 'react-bootstrap';

import PageTitle from 'layouts/PageTitle';

const Events = () => {
    const data = [];
    return(
        <>
            <Helmet>
                <title>Learn HTML</title>
            </Helmet>

            <PageTitle
                title="HTML Event Attributes"
                depth1="Learn"
                depth2="HTML"
                depth3="Event Attributes"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> Global Event Attributes
                                </Card.Title>
                                <Card.Text>
                                    HTML은 사용자가 요소를 클릭할 때 자바스크립트를 시작하는 것과 같이 브라우저에서
                                    이벤트가 액션을 트리거하도록 허용하는 기능을 가지고 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> Window Event Attributes
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> Form Events
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> Keyboard Events
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> Mouse Events
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> Drag Events
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> Clipboard Events
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> Media Events
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <i className="bi bi-subtract"></i> Misc Events
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Events;