import {
    BsPin, BsPinAngle
,   BsCheckCircle, BsInfoCircle
,   BsExclamationOctagonFill, BsExclamationTriangle
} from 'react-icons/bs';
import Alert from 'react-bootstrap/Alert';

const Note = (props) => {
    const {
        variant="info"
    ,   title
    ,   content
    ,   children
    } = props;

    const BsIcon = ({ variant }) => {
        switch(variant) {
            case 'success' :
                return <BsCheckCircle />;
            case 'danger' :
                return <BsExclamationOctagonFill />;
            case 'warning' :
                return <BsExclamationTriangle />;
            case 'info' :
                return <BsInfoCircle />;
            case 'primary' :
            case 'secondary' :
            case 'light' :
            case 'dark' :
                return <BsPin />;
            default :
                return <BsPinAngle />;
        }
    };

    return(
        <Alert
            variant={ variant }
            className="mt-3"
        >
            <Alert.Heading>
                <BsIcon variant={ variant } /> { title }
            </Alert.Heading>
            <p
                className="mb-0"
                style={{ whiteSpace : 'pre-line' }}
            >{ (children) ? children : content }
            </p>
        </Alert>
    );
};

export default Note;