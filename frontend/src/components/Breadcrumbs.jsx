import { Link } from 'react-router-dom';

const Breadcrumbs = (props) => {

    const { title, breadcrumbs } = props;

    const LinkCreator = ({ text }) => {
        return(<Link to="/">{ text }</Link>);
    };

    const LiCreator = () => {
        let result = [],
            len = breadcrumbs.length;
        for (let i = 0; i < len; i++) {
            let text = breadcrumbs[i],
                link = (i === 0) ? <LinkCreator text={ text } /> : text,
                className = (len === i + 1) ? " active" : "";
            result.push(
                <li
                    key={ i }
                    className={ "breadcrumb-item" + className }
                >{ link }</li>
            );
        }
        return result;
    };

    return(
        <>
            <div className="pagetitle">
                <h1>{ title }</h1>
                <nav>
                    <ol className="breadcrumb">{ LiCreator() }</ol>
                </nav>
            </div>{/* End Page Title */}
        </>
    );
};

export default Breadcrumbs;