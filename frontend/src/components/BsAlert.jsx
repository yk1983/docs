import {
    BsPin, BsPinAngle
,   BsCheckCircle, BsInfoCircle
,   BsExclamationOctagonFill, BsExclamationTriangle
} from 'react-icons/bs';
import Alert from 'react-bootstrap/Alert';

const BsAlert = (props) => {
    const {
        variant="info"
    ,   title
    ,   content
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
            case 'primary', 'secondary', 'light', 'dark' :
                return <BsPin />;
            default :
                return <BsPinAngle />;
        }
    };

    return(
        <Alert variant={ variant }>
            <Alert.Heading>
                <BsIcon variant={ variant } /> { title }
            </Alert.Heading>
            <p style={{ whiteSpace : 'pre-line' }}>
                { content }
            </p>
        </Alert>
    );
};

export default BsAlert;