import { BsSubtract, BsPinAngle } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import BsAlert from 'components/BsAlert';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

/**
 * BsCard.jsx
 * @param   props
 *  - style         : <Card>의 style속성을 지정
 *  - title         : <Card.Title>
 *  - subtitle      : <Card.Subtitle> (값이 업는 경우 생성하지 않음)
 *  - content       : <Card.Text>
 *  - alert         : <Card.Footer>에 <Alert>을 생성
 *  - img           : <Card.Img> 생성
 *      - variant   : <Card.Img>의 위치를 지정 (top, bottom)
 * @return  components
 * @version 1.0.0
 */

const BsCardImg = ({ img }) => {
    const
        variant = img.variant,
        src = process.env.PUBLIC_URL + img.src;

    return(
        <Card.Img
            variant={ variant }
            src={ src }
        />
    );
};

const BsCardSubtitle = ({ content }) => {
    return(
        <Card.Subtitle
            className="mb-2 text-muted"
        >{ content }
        </Card.Subtitle>
    );
};

const BsCardText = ({ content }) => {
    return(
        <Card.Text
            style={{ whiteSpace : 'pre-line' }}
        >{ content }
        </Card.Text>
    );
};

const BsCodeBlock = ({ language, codestring }) => {
    return (
        <Highlight
            language={ language }
            codestring= { codestring }
        />
    );
};

const BsCard = (props : Porps) => {
    const {
        style
    ,   title
    ,   subtitle
    ,   content
    ,   variant
    ,   alert
    ,   img
    } = props;

    let contentItems = [];
    content.map((item, index) => {
        const getEntries = Object.keys(item).map((key, index) => {
            switch (key) {
                case 'text' :
                    contentItems.push(<BsCardText key={ index } content={ item[key] } />);
                    break;
                case 'highlight' :
                    contentItems.push(<BsCodeBlock key={ index } language={ item[key].language } codestring={ item[key].content } />);
                    break;
                case 'list' :
                    break;
                // no default :
            }
        });
    });

    return(
        <>
            <Card
                style={ style }
            >
                {(img && Object.is(img.variant, 'top')) &&
                <BsCardImg
                    variant={ img.variant }
                    src={ process.env.PUBLIC_URL + img.src }
                />
                }
                <Card.Body>
                    <Card.Title>
                        <BsSubtract / > { title }
                    </Card.Title>
                    {(subtitle) &&
                    <BsCardSubtitle
                        content={ subtitle }
                    />
                    }
                    { contentItems /* Card.Body 내용 설정 */}
                </Card.Body>
                {(img && Object.is(img.variant, 'bottom')) &&
                <BsCardImg
                    variant={ img.variant }
                    src={ process.env.PUBLIC_URL + img.src }
                />
                }
                {(alert) &&
                <Card.Footer>
                    <BsAlert
                        {...alert}
                    />
                </Card.Footer>
                }
            </Card>
        </>
    );
};

export default BsCard;