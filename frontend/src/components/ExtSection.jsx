import { Row, Col } from 'react-bootstrap';
import ExtCard from 'components/ExtCard';

const ExtSection = ({ data }) => {
//    console.log(data);

    let rowChildren = [];
    data.map((item, index) => {
        const { col = 12, title, subtitle, body } = item;
        rowChildren.push(
            <Col lg={ col } key={ index }>
                <ExtCard
                    title={ title }
                    subtitle={ subtitle }
                    data={ body }
                />
            </Col>
        );
    });

    return(
        <>
            <section className="section">
                <Row>{ rowChildren }</Row>
            </section>
        </>
    );
}

export default ExtSection;