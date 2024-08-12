import { Alert } from 'react-bootstrap';
import { BsPinAngle } from 'react-icons/bs';

const ExtAlert = (title, content) => {
    return(
        <Alert>
            <Alert.Heading>
                <BsPinAngle /> { title }
            </Alert.Heading>
            <p>
                { content.join('') }
            </p>
        </Alert>
    );
};

export default ExtAlert;