import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';

const SectionRender = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="자료형(Java Data Types)"
                depth1="Learn"
                depth2="Java"
                depth3="Data Types"
            />

            <section className="section">
                <Row>
                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 변수<sup>variable</sup>
                                </Card.Title>
                                <Card.Text>
                                    변수(variable)란 데이터(data)를 저장하기 위해
                                    프로그램에 의해 이름을 할당받은 메모리 공간을 의미합니다.<br />
                                    즉, 변수란 데이터(data)를 저장할 수 있는 메모리 공간을 의미하며, 이렇게 저장된 값은
                                    변경될 수 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 상수<sup>constant</sup>
                                </Card.Title>
                                <Card.Text>
                                    상수(constant)란 변수와 마찬가지로 데이터를
                                    저장할 수 있는 메모리 공간을 의미합니다.<br />
                                    하지만 상수가 변수와 다른 점은 프로그램이 실행되는 동안 메모리에 저장된 데이터를
                                    변경할 수 없다는 점입니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 리터럴<sup>literal</sup>
                                </Card.Title>
                                <Card.Text>
                                    리터럴(literal)이란 그 자체로 값을 의미하는
                                    것입니다.<br />
                                    즉, 변수와 상수와는 달리 데이터가 저장된 메모리 공간을 가리키는 이름을 가지고 있지 않습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 변수명 생성 규칙
                                </Card.Title>
                                <Card.Text>
                                    자바에서는 변수뿐만 아니라 클래스(class), 메서드(method)등의 이름을 짓는데 지켜야할 규칙이 있습니다.<br />
                                    자바에서 변수명을 생성할 때에 반드시 지켜야 하는 규칙입니다.
                                </Card.Text>
                                <ul>
                                    <li>변수의 이름은 영문자(대소문자), 숫자, 언더스코어(_), 달러($)로만 구성할 수 있습니다.</li>
                                    <li>변수의 이름은 숫자로 시작할 수 없습니다.</li>
                                    <li>변수의 이름 사이에는 공백을 포함할 수 없습니다.</li>
                                    <li>변수의 이름으로 자바에서 미리 정의된 키워드(keyword)는 사용할 수 없습니다.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 변수의 종류
                                </Card.Title>
                                <ul>
                                    <li>
                                        기본형(primitive type) 변수 :
                                        기본형 변수는 실제 연산에 사용되는 변수입니다.
                                        <ul>
                                            <li>정수형 : byte, short, int, long</li>
                                            <li>실수형 : float, double</li>
                                            <li>문자형 : char</li>
                                            <li>논리형 : boolean</li>
                                        </ul>
                                    </li>
                                    <li>
                                        참조형(reference type) 변수 :
                                        참조형 변수는 기본형 변수를 제외한 변수 또는 기본형 변수를 사용하여 사용자가 직접 만들어 사용하는 변수를 의미합니다.
                                        <ul>
                                            <li>문자열 : String</li>
                                            <li>배열 : Arrays</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 변수의 선언
                                </Card.Title>
                                <Card.Text>
                                    자바에서는 변수를 사용하기 전에 반드시 먼저 변수를 선언하고 초기화해야 합니다.
                                </Card.Text>
                                <ul>
                                    <li>
                                        변수의 선언만 하는 방법 : 이 방법은 먼저 변수를 선언하여 메모리 공간을 할당받고, 나중에 변수를 초기화하는 방법입니다.
                                        하지만 이렇게 선언만 된 변수는 초기화되지 않았으므로, 해당 메모리 공간에는 알 수 없는 쓰레기값이 들어가 있습니다.
                                        따라서 선언만 된 변수는 반드시 초기화한 후에 사용해야만 합니다.
                                    </li>
                                    <li>
                                        변수의 선언과 동시에 초기화하는 방법 : 자바에서는 변수의 선언과 동시에 그 값을 초기화할 수 있습니다.
                                        또한, 선언하고자 하는 변수들의 타입이 같다면 이를 동시에 선언할 수도 있습니다.
                                        하지만 다음 예제처럼 여러 변수를 동시에 초기화할 수는 없습니다. (예를 들면, 자바스크립트의 변수의 선언 초기화)
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default SectionRender;