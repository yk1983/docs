import { Accordion } from 'react-bootstrap';

const Item = (header, body, index) => {
    return (
        <Accordion.Item key={ index } eventKey={ `${index}` }>
            <Accordion.Header>
                { header }
            </Accordion.Header>
            <Accordion.Body>
                { body }
            </Accordion.Body>
        </Accordion.Item>
    );
};

const ComponentReander = (props) => {
//    console.log('props', props);
    const { defaultActiveKey = '0', className = 'accordion-flush', style } = props;
    let items = [];
    let list = props.data;
    list.map((item, index) => {
        items.push(Item(item.header, item.body, index));
    });

    return(
        <Accordion
            defaultActiveKey={ defaultActiveKey }
            className={ className }
            style={ style }
        >{ items }
        </Accordion>
    );
};

export default ComponentReander;