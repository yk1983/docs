import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table, Image } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
// JsonData
import data from 'data/bpmn/flow';

const SectionRender = () => {
    return(
        <>
            <Helmet>
                <title>Learn BPMN</title>
            </Helmet>

            <PageTitle
                title="흐름(Flow)"
                depth1="Learn"
                depth2="BPMN"
                depth3="Flow"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 흐름<sup>Flow</sup>
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
                                    {data.map(( item, index ) => (
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