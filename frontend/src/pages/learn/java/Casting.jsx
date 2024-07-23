import { Helmet } from 'react-helmet-async';

const Casting = () => {
    return(
        <>
            <Helmet>
                <title>Learn React</title>
            </Helmet>

            <div className="pagetitle">
                <h1>형변환(Casting)</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Learn</a></li>
                        <li className="breadcrumb-item">Java</li>
                        <li className="breadcrumb-item active">Casting</li>
                    </ol>
                </nav>
            </div> {/* End Page Title */}

            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">형변환</h5>
                                <p>
                                    프로그램을 작성하다 보면 같은 타입뿐만 아니라 서로 다른 타입간의 연산을 수행해야
                                    하는 경우가 있습니다.
                                    이럴 경우에는 연산을 수행하기 전에 타입을 일치시켜야 하는데, 변수나 리터럴의 타입을
                                    다른 타입으로 변환하는 것을 형변환(캐스팅, casting)이라고 합니다.<br />
                                    형변환 방법은 간단합니다.
                                    형변환하고자 하는 변수나 리터럴의 앞에 변환하고자 하는 타입을 괄호와 함께 붙여주기만
                                    하면 됩니다. 이 때 사용되는 괄호()는 캐스트 연산자 또는 형변환 연산자라고 하며,
                                    형변환을 캐스팅(casting)이라고 합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Casting;