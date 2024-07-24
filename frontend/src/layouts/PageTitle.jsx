const PageTitle = (props) => {
    return(
        <>
            <div className="pagetitle">
                <h1>{ props.title }</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">{ props.depth1 }</a></li>
                        <li className="breadcrumb-item">{ props.depth2 }</li>
                        <li className="breadcrumb-item active">{ props.depth3 }</li>
                    </ol>
                </nav>
            </div> {/* End Page Title */}
        </>
    );
}

export default PageTitle;