import { Helmet } from 'react-helmet-async';

interface Props {
    className? : string;
}
// document title tag creator
const Title = ({ text }) => {
    return(
        <Helmet>
            <title>{ text }</title>
        </Helmet>
    );
};
// code tag creator
const Code = (props : Props) => {
    const { text } = props;
    return(<code {...props}>{ text }</code>);
};
// span tag creator
const Span = (props : Props) => {
    const { text, className = 'text-primary' } = props;
    return(<span {...props} className={ className }>{ text }</span>);
};
// sup tag creator
const Sup = (props : Props) => {
    const { text } = props;
    return(<sup {...props}>{ text }</sup>);
};
// ul > li , ol > li tag creator
const List = (props) => {
    const
        isNumber = props.isNumber,
        items = props.items,
        includeHTML = props.includeHTML,
        listItems = items.map((item, index) => {
//            if (isHtml) {
//                return(<li key={ index } dangerouslySetInnerHTML={ {__html: item} } ></li>);
//            }
//            else {
//                return(<li key={ index }>{ item }</li>);
//            }
            return(
                (includeHTML)
                    ? <li key={ index } dangerouslySetInnerHTML={ {__html: item} } ></li>
                    : <li key={ index }>{ item }</li>
            );
        });

    return(
        <>
            { isNumber ? <ol>{ listItems }</ol> : <ul>{ listItems }</ul> }
        </>
    );
};

export { Code, Span, Sup, Title, List };