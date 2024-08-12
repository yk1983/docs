import { Card } from 'react-bootstrap';
import { BsSubtract, BsPinAngle } from 'react-icons/bs';
import { Sup } from 'components/elements/Elements'; // Components
import ExtSection from 'components/ExtSection';
import ExtAlert from 'components/ExtAlert';

const ExtCard = (props) => {
//    console.log(props);

    const { title, subtitle, data } = props;
    const cardText = [];

    const CardImg = (variant, img) => {
        return(
            <Card.Img
                variant={ variant }
                src={ img }
            />
        );
    };

    const CardText = ({ text, index }) => {
        return(
            <Card.Text style={{ whiteSpace : 'pre-line' }}>
                { text }
            </Card.Text>
        );
    };

    const CardFooter = ({ title, content }) => {
        return(
            <Card.Footer>
                <ExtAlert
                    title={ title }
                    body={ content }
                />
            </Card.Footer>
        );
    };

    data.map((item, index) => {
        console.log('item', item);

        Object.entries(item).map(([ key, value ]) => {
            console.log(key);
            if (Object.is(key, 'text')) {
                cardText.push(<CardText text={ value.join('') } />);
            }
        });
    });

    return(
        <>
            <Card>
                <Card.Body>
                    <Card.Title>
                        <BsSubtract /> { title } <Sup text={ subtitle } />
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        { subtitle }
                    </Card.Subtitle>
                    { cardText }
                </Card.Body>
            </Card>
        </>
    );
};

export default ExtCard;