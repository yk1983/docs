import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { BsSubtract, BsFeather } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';

const SectionRender = () => {
    return(
        <>
            <Helmet>
                <title>Learn BPMN</title>
            </Helmet>

            <PageTitle
                title="스윔레인(Swimlane)"
                depth1="Learn"
                depth2="BPMN"
                depth3="Swimlane"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 스윔레인<sup>Swimlane</sup>
                                </Card.Title>
                                <Card.Text>
                                    BPMN으로 그린 맵 캔버스는 레인과 풀로 구성됩니다.
                                    <br />
                                    스윔레인은 BPMN 다이어그램의 프로세스의 측면을 정리하는 데 사용됩니다.
                                    스윔레인은 개체를 레인으로 시각적으로 그룹화하며, 프로세스의 각 측면을 별도의 레인에 추가합니다.
                                    이러한 요소는 가로 또는 세로로 정렬할 수 있습니다.
                                    스윔레인은 활동을 개별 카테고리로 정리할 뿐 아니라, 지연, 비효율 및 프로세스의 각 단계를 담당하는 작업자도 나타낼 수 있습니다.
                                </Card.Text>
                                <h6><BsFeather /> 구성</h6>
                                <ul>
                                    <li>Pool</li>
                                    <li>Swimlane</li>
                                    <li>Column</li>
                                    <li>Blackbox Pool</li>
                                </ul>
                                <Image
                                    src={ process.env.PUBLIC_URL + '/assets/img/bpmn/swimlane/swimlane.jpg' }
                                    title="Swimlane"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default SectionRender;