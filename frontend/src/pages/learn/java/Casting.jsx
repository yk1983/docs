import { BsSubtract } from 'react-icons/bs';
import { Row, Col, Card } from 'react-bootstrap';
import { Title, Sup, Code } from 'components/elements/Elements'; // Components
import PageTitle from 'layouts/PageTitle';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const Casting = () => {
    return(
        <>
            <Title
                text="Learn JAVA"
            />

            <PageTitle
                title="형변환(Casting)"
                depth1="Learn"
                depth2="Java"
                depth3="Casting"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 형변환 <Sup text="Casting" />
                                </Card.Title>
                                <Card.Text>
                                    프로그램을 작성하다 보면 같은 타입뿐만 아니라 서로 다른 타입간의 연산을 수행해야
                                    하는 경우가 있습니다.
                                    이럴 경우에는 연산을 수행하기 전에 타입을 일치시켜야 하는데, 변수나 리터럴의 타입을
                                    다른 타입으로 변환하는 것을 형변환(캐스팅, casting)이라고 합니다.
                                    <br />
                                    형변환 방법은 간단합니다.
                                    형변환하고자 하는 변수나 리터럴의 앞에 변환하고자 하는 타입을 괄호와 함께 붙여주기만
                                    하면 됩니다. 이 때 사용되는 괄호()는 캐스트 연산자 또는 형변환 연산자라고 하며,
                                    형변환을 캐스팅(casting)이라고 합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 묵시적 <Sup text="Implicit" /> 형변환
                                </Card.Title>

                                <Card.Text>
                                    타입 변환을 시스템이 자동으로 실행합니다.
                                    대부분 작은 데이터 타입에서 큰 데이터 타입으로의 형변환이 일어납니다.
                                    (작은 데이터 타입에서 큰 데이터 타입으로 변환할 때 데이터 손실의 가능성이 없기 때문입니다.)
                                </Card.Text>
                            </Card.Body>
                            <Card.Img
                                variant="bottom"
                                src={ process.env.PUBLIC_URL + "/assets/img/java/auto_casting.png" }
                            />
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 명시적 <Sup text="Explicit" /> 형변환
                                </Card.Title>

                                <Card.Text>
                                    큰 데이터가 작은 데이터 타입으로 변환하려는 경우에 사용되며, 형변환을 위해
                                    캐스팅 연산자(casting operator)를 사용해야합니다.
                                </Card.Text>

                                <Highlight
                                    language="java"
                                    codestring={[
                                        "double doubleValue = 42.7;"
                                    ,   "int intValue;"
                                    ,   "intValue = (int) doubleValue; // 명시적 형변환 발생, 소수부분이 손실됨"
                                    ]}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 업캐스팅 <Sup text="UpCasting" />
                                </Card.Title>

                                <Card.Text>
                                    상위 클래스 타입의 변수에 하위 클래스의 인스턴스를 할당하는 것을 의미합니다.
                                    <br />
                                    묵시적 형변환에서처럼 하위 클래스의 인스턴스가 상위 클래스의 변수에 할당할때는 데이터 손실의 가능성이 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 다운캐스팅 <Sup text="DownCasting" />
                                </Card.Title>

                                <Card.Text>
                                    상위 클래스 인스턴스를 하위 클래스 타입의 변수에 할당하는 것을 의미합니다.
                                    <br />
                                    상속 관계에서 상위 클래스 타입의 변수에 하위 클래스 인스턴스가 할당되어 있을 때,
                                    하위 클래스의 멤버 변수나 메서드에 접근하려면 명시적 형변환을 수행해야합니다.
                                    <br />
                                    또한 실제로 변환되는 객체가 해당 하위 클래스의 인스턴스인지 확인해야 합니다.
                                    그렇지 않으면 ClassCastException 오류가 발생할 수 있으므로,
                                    하위 클래스의 인스턴스임을 확인하기 위해 <Code text="instanceof" /> 연산자를 사용하여 확인을 합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Casting;