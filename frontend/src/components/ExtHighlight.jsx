import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Highlighter : React.FC<{ language : string, codestring : string }> = ({ language, codestring }) => {
    return (
        <SyntaxHighlighter
            language={ language }
            style={ a11yDark }
            showLineNumbers
        >{ codestring }
        </SyntaxHighlighter>
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