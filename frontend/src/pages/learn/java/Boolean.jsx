import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';

import PageTitle from 'layouts/PageTitle';

const BooleanType = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="논리형(Boolean types)"
                depth1="Learn"
                depth2="Java"
                depth3="Boolean types"
            />

            <section className="section">
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 논리형
                                </Card.Title>
                                <Card.Text>
                                    논리형은 참(true)이나 거짓(false) 중 한 가지 값만을 가질 수 있는 불리언 타입을 의미합니다.<br />
                                    boolean형의 기본값은 false이며, 기본 타입 중 가장 작은 크기인 1바이트의 크기를 가집니다.
                                </Card.Text>
                                <ul>
                                    <li>boolean</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 논리형 타입에 따른 메모리의 크기 및 데이터의 표현 범위
                                </Card.Title>
                                {/* Small tables */}
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>타입</th>
                                            <th>할당 크기</th>
                                            <th>표현 범위</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>boolean</td>
                                            <td>1byte</td>
                                            <td>true 또는 false</td>
                                        </tr>
                                    </tbody>
                                </Table> {/* End small tables */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default BooleanType;