import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table, Image } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
// JsonData
import data1 from 'data/bpmn/dataObjectType';
import data2 from 'data/bpmn/dataStore';

const SectionRender = () => {
    return(
        <>
            <Helmet>
                <title>Learn BPMN</title>
            </Helmet>

            <PageTitle
                title="데이터 객체(Data Object)"
                depth1="Learn"
                depth2="BPMN"
                depth3="Data Object"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 데이터 객체<sup>Data Object</sup>
                                </Card.Title>
                                <Card.Text>
                                    데이터 객체(Data Object)는 프로세스 흐름에서 처리되는 데이터 구조와 정보를 표현하며,
                                    다음과 같은 5가지 데이터 모델 요소를 사용할 수 있습니다.
                                </Card.Text>
                                <ul>
                                    <li>데이터 객체(Data Object)</li>
                                    <li>입력 데이터(Data Input)</li>
                                    <li>출력 데이터(Data Output)</li>
                                    <li>데이터 수집(Data Collection)</li>
                                    <li>데이터 저장소(Data Store)</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> Data Object Type
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
                                            <td
                                                style={{ whiteSpace: "pre-wrap" }}
                                                rowspan={ item.rowspan }
                                            >{ item.description }</td>
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
                                    <BsSubtract /> Data Store
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
                                            <td
                                                style={{ whiteSpace: "pre-wrap" }}
                                                rowspan={ item.rowspan }
                                            >{ item.description }</td>
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

export default SectionRender;