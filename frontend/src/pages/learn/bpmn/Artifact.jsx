import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table, Image } from 'react-bootstrap';
import { BsSubtract, BsFeather } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
// JsonData
import data from 'data/bpmn/artifact';

const Artifact = () => {
    return(
        <>
            <Helmet>
                <title>Learn BPMN</title>
            </Helmet>

            <PageTitle
                title="아티팩트(Artifact)"
                depth1="Learn"
                depth2="BPMN"
                depth3="Artifact"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 아티팩트<sup>Artifact</sup>
                                </Card.Title>
                                <Card.Text>
                                    아티팩트(Artifact)는 프로세스 실행에 영향을 미치지 않고 프로세스 다이어그램에만 표현하는 구문적인 정보를 말합니다.
                                    BPMN에서는 다음과 같은 2가지 아티팩트를 가집니다.
                                </Card.Text>
                                <h6><BsFeather /> 아티팩트(Artifact) 종류</h6>
                                <ul>
                                    <li>그룹(Group)</li>
                                    <li>주석(Annotation)</li>
                                </ul>
                                <Table bordered size="sm">
                                    <thead>
                                        <tr>
                                            <th>기호</th>
                                            <th>의미</th>
                                            <th>설명</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map(( item, index ) => (
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

export default Artifact;