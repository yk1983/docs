interface Props {
    className? : string;
}

const Span = (props : Props) => {
    const { contents, className = 'text-primary' } = props;
    console.log(props);
    return(
        <>
            <span
                {...props}
                className={ className }
            >{ contents }
            </span>
        </>
    );
}

export default Span;