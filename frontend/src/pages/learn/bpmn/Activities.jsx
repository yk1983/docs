import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table, Image } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
// JsonData
import data1 from './data/taskType';
import data2 from './data/taskMaker';

const Activities = () => {
    return(
        <>
            <Helmet>
                <title>Learn BPMN</title>
            </Helmet>

            <PageTitle
                title="활동(Activities)"
                depth1="Learn"
                depth2="BPMN"
                depth3="Activities"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 활동<sup>Activities</sup>
                                </Card.Title>
                                <Card.Text>
                                    Task는 프로세스 흐름 상에서 더 이상 상세 레벨로 내려갈 수 없는 가장 작은 단위입니다.
                                    일반적으로 사람이나 애플리케이션이 실제로 행동하는 것을 표현하는 단위이기도 합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> Taks Type
                                </Card.Title>
                                <Table bordered size="sm">
                                    <thead>
                                        <tr>
                                            <th>기호</th>
                                            <th>의미</th>
                                            <th>설명</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data1.map(( item, index ) => (
                                        <tr key={ index }>
                                            <td>
                                                <Image
                                                    src={ process.env.PUBLIC_URL + '/assets/img/bpmn' + item.image }
                                                    title={ item.title }
                                                />
                                            </td>
                                            <td style={{ whiteSpace: "pre-wrap" }}>{ item.name }</td>
                                            <td style={{ whiteSpace: "pre-wrap" }}>{ item.description }</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table> {/* End tables */}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> Taks Maker
                                </Card.Title>
                                <Card.Text>
                                    Task는 Loop, Multi-Instance, Compensation 3가지 타입 마커를 넣어서 더 상세하게 표현 할 수 있습니다.
                                </Card.Text>
                                <Table bordered size="sm">
                                    <thead>
                                        <tr>
                                            <th>기호</th>
                                            <th>의미</th>
                                            <th>설명</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data2.map(( item, index ) => (
                                        <tr key={ index }>
                                            <td>
                                                <Image
                                                    src={ process.env.PUBLIC_URL + '/assets/img/bpmn' + item.image }
                                                    title={ item.title }
                                                />
                                            </td>
                                            <td style={{ whiteSpace: "pre-wrap" }}>{ item.name }</td>
                                            <td style={{ whiteSpace: "pre-wrap" }}>{ item.description }</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table> {/* End tables */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Activities;