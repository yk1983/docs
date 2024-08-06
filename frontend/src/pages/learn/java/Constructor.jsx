import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
import { Sup, Code } from 'components/elements/Elements'; // Components
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const Constructor = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="생성자(Constructor)"
                depth1="Learn"
                depth2="Java"
                depth3="Constructor"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 생성자 <Sup text="constructor" />
                                </Card.Title>
                                <Card.Text>
                                    자바에서는 객체의 생성과 동시에 인스턴스 변수를 원하는 값으로 초기화할 수 있는
                                    생성자(constructor)라는 메소드를 제공합니다.
                                    (자바에서 생성자(constructor)의 이름은 해당 클래스의 이름과 같아야 합니다.)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 생성자의 특징
                                </Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>
                                            생성자는 반환값이 없지만, 반환 타입을 void형으로 선언하지 않습니다.
                                        </li>
                                        <li>
                                            생성자는 초기화를 위한 데이터를 인수로 전달받을 수 있습니다.
                                        </li>
                                        <li>
                                            객체를 초기화하는 방법이 여러 개 존재할 경우에는 하나의 클래스가 여러 개의
                                            생성자를 가질 수 있습니다. (즉, 생성자도 일종의 메서드이므로, 메서드 오버라딩이 가능합니다.)
                                        </li>
                                        <li>
                                            <Code text="new 키워드" />를 사용하여 객체를 생성할 때 자동으로 생성자는 호출됩니다.
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 생성자 선언
                                </Card.Title>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "클래스명() {} // 매개변수가 없는 기본생성자"
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 기본 생성자 <Sup text="default constructor" />
                                </Card.Title>
                                <Card.Text>
                                    자바의 모든 클래스에는 하나 이상의 생성자가 정의되어 있어야 하지만, 자바 컴파일러가
                                    기본 생성자(default constructor)라는 것을 기본적으로 제공해 주기 때문에 특별히 생성자를
                                    정의하지 않고도 인스턴스를 생성할 수 있습니다. (기본 생성자는 매개변수를 하나도
                                    가지지 않으며, 아무런 명령어도 포함하고 있지 않습니다.)
                                    <br />
                                    <br />
                                    자바 컴파일러는 컴파일 시 클래스에 생성자가 하나도 정의되어 있지 않으면,
                                    자동으로 다음과 같은 기본 생성자를 추가합니다. (기본 생성자는 어떠한 매개변수도
                                    전달받지 않으며, 기본적으로 아무런 동작도 하지 않습니다.)
                                    <br />
                                    하지만 만약 매개변수를 가지는 생성자를 하나라도 정의했다면, 기본 생성자는 자동으로
                                    추가되지 않습니다.
                                </Card.Text>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "// 선언문법",
                                        "클래스명() {} // 매개변수가 없는 생성자 선언",
                                        "클래스명(매개변수1, 매개변수2) {...} // 매개변수가 있는 생성자",
                                        "// 선언예시",
                                        "Car() {}",
                                        "// 매개변수가 존재하는 생성자 (매개변수의 갯수가 다르므로 오버라이딩)",
                                        "Car(String modelName) {}",
                                        "Car(String modelName, int modelYear) {}",
                                        "Car(String modelName, int modelYear, String color) {}",
                                        "Car(String modelName, int modelYear, String color, int maxSpeeds) {}"
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Constructor;