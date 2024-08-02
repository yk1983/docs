import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table, Image } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
// JsonData
import data1 from './data/startEvent';
import data2 from './data/endEvent';
import data3 from './data/intermedidateEvent';

const Events = () => {
    return(
        <>
            <Helmet>
                <title>Learn BPMN</title>
            </Helmet>

            <PageTitle
                title="이벤트(Event)"
                depth1="Learn"
                depth2="BPMN"
                depth3="Event"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 이벤트<sup>Event</sup>
                                </Card.Title>
                                <Card.Text>
                                    BPMN에서 이벤트(Event)는 비즈니스 프로세스 전반에 걸쳐 발생하는 것입니다.
                                    항상 원으로 표시되며 해당 원 안에 아이콘을 포함하여 이벤트를 보다 자세히 설명할 수 있습니다.
                                    다이어그램에는 항상 시작 및 종료 이벤트 기호도 포함되어야 합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 시작 이벤트<sup>Start Event</sup>
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
                                    <BsSubtract /> 종료 이벤트<sup>End Event</sup>
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

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 중간 이벤트<sup>Intermedidate Event</sup>
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
                                    {data3.map(( item, index ) => (
                                        <tr key={ index }>
                                            <td>
                                                <Image
                                                    src={ process.env.PUBLIC_URL + '/assets/img/bpmn' + item.image }
                                                    title={ item.title }
                                                />
                                            </td>
                                            <td style={{ whiteSpace: "pre-wrap" }}>{ item.name }</td>
                                            <td style={{ whiteSpace: "pre-wrap" }} rowspan={ item.rowspan }>{ item.description }</td>
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

export default Events;