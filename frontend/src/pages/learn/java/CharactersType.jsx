import { Helmet } from 'react-helmet-async';

const CharactersType = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <div className="pagetitle">
                <h1>문자형(Characters types)</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Learn</a></li>
                        <li className="breadcrumb-item">Java</li>
                        <li className="breadcrumb-item active">Characters types</li>
                    </ol>
                </nav>
            </div> {/* End Page Title */}

            <section className="section">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">문자형</h5>
                                <p>
                                    자바에서 문자형 데이터란 작은 정수나 문자 하나를 표현할 수 있는 타입을 의미합니다.
                                </p>
                                <ul>
                                    <li>char</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">문자형 타입에 따른 메모리의 크기 및 데이터의 표현 범위</h5>
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
                                            <td>char</td>
                                            <td>2byte</td>
                                            <td>0 ~ 2<sup>16</sup></td>
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

export default CharactersType;