import { BsJournalText } from 'react-icons/bs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Highlighter : React.FC<{ language : string, codestring : string, header : string }> = ({ language, codestring, header }) => {
    return (
        <>
            {(header) && <h6><BsJournalText /> { header }</h6>}
            <SyntaxHighlighter
                language={ language }
                style={ a11yDark }
                showLineNumbers
            >{ codestring }
            </SyntaxHighlighter>
        </>
    );
};
//const Highlighter = (props) => {
//    return(
//        <>
//            <SyntaxHighlighter
//                {...props}
//                showLineNumbers
//                style= { a11yDark }
//            >{props.codestring}
//            </SyntaxHighlighter>
//        </>
//    );
//}
//
export default Highlighter;