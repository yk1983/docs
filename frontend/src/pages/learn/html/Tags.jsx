import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
// JsonData
import data from 'data/html/tags';

const SectionRender = () => {
    return(
        <>
            <Helmet>
                <title>Learn HTML</title>
            </Helmet>

            <PageTitle
                title="HTML Element Reference"
                depth1="Learn"
                depth2="HTML"
                depth3="Element Reference"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> HTML Element Reference
                                </Card.Title>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Tag</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map(( item, index ) => (
                                        <tr key={ index }>
                                            <td>{ item.tag }</td>
                                            <td>{ item.description }</td>
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