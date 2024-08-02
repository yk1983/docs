import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
// JsonData
import data from './data/globalAttributes'

const GlobalAttributes = () => {
    return(
        <>
            <Helmet>
                <title>Learn HTML</title>
            </Helmet>

            <PageTitle
                title="HTML Global Attributes"
                depth1="Learn"
                depth2="HTML"
                depth3="Global Attributes"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> HTML Global Attributes
                                </Card.Title>
                                {/* tables */}
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Attribute</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((item, index) => (
                                        <tr key={ index }>
                                            <td>{ item.attribute }</td>
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

export default GlobalAttributes;