import { Helmet } from 'react-helmet-async';

const BooleanType = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <div className="pagetitle">
                <h1>논리형(Boolean types)</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Learn</a></li>
                        <li className="breadcrumb-item">Java</li>
                        <li className="breadcrumb-item active">Boolean types</li>
                    </ol>
                </nav>
            </div> {/* End Page Title */}

            <section className="section">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">논리형</h5>
                                <p>
                                    논리형은 참(true)이나 거짓(false) 중 한 가지 값만을 가질 수 있는 불리언 타입을 의미합니다.<br />
                                    boolean형의 기본값은 false이며, 기본 타입 중 가장 작은 크기인 1바이트의 크기를 가집니다.
                                </p>
                                <ul>
                                    <li>boolean</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">논리형 타입에 따른 메모리의 크기 및 데이터의 표현 범위</h5>
                                {/* Small tables */}
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">타입</th>
                                            <th scope="col">할당 크기</th>
                                            <th scope="col">표현 범위</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>boolean</td>
                                            <td>1byte</td>
                                            <td>true 또는 false</td>
                                        </tr>
                                    </tbody>
                                </table> {/* End small tables */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BooleanType;