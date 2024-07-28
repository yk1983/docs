import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';

import PageTitle from 'layouts/PageTitle';

const Characters = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="문자형(Characters types)"
                depth1="Learn"
                depth2="Java"
                depth3="Characters types"
            />

            <section className="section">
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 문자형
                                </Card.Title>
                                <Card.Text>
                                    자바에서 문자형 데이터란 작은 정수나 문자 하나를 표현할 수 있는 타입을 의미합니다.
                                </Card.Text>
                                <ul>
                                    <li>char</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 문자형 타입에 따른 메모리의 크기 및 데이터의 표현 범위
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
                                            <td>char</td>
                                            <td>2byte</td>
                                            <td>0 ~ 2<sup>16</sup></td>
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

export default Characters;