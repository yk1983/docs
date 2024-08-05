interface Props {
    className? : string;
}

const Code = (props : Props) => {
    const { text } = props;

    return(
        <>
            <code
                {...props}
            >{ text }
            </code>
        </>
    );
};

const Span = (props : Props) => {
    const { text, className = 'text-primary' } = props;

    return(
        <>
            <span
                {...props}
                className={ className }
            >{ text }
            </span>
        </>
    );
};

const Sup = (props : Props) => {
    const { text } = props;

    return(
        <>
            <sup
                {...props}
            >{ text }
            </sup>
        </>
    );
};

export { Code, Span, Sup };