import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
import { Sup, Code } from 'components/elements/Elements'; // Components
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="this"
                depth1="Learn"
                depth2="Java"
                depth3="this"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> this 참조 변수
                                </Card.Title>
                                <Card.Text>
                                    <Code text="this" /> 참조 변수는 인스턴스가 바로 자기 자신을 참조하는데 사용하는 변수입니다.
                                    이러한 this 참조 변수는 해당 인스턴스의 주소를 가리키고 있습니다.
                                </Card.Text>
                                <Highlight
                                    laguage="java"
                                    codestring={[
                                        "class Car {",
                                        "    private String modelName;",
                                        "    private int modelYear;",
                                        "    private String color;",
                                        "    private int maxSpeed;",
                                        "    private int currentSpeed;",
                                        "",
                                        "    Car(String modelName, int modelYear, String color, int maxSpeed) {",
                                        "        this.modelName = modelName;",
                                        "        this.modelYear = modelYear;",
                                        "        this.color = color;",
                                        "        this.maxSpeed = maxSpeed;",
                                        "        this.currentSpeed = 0;",
                                        "    }",
                                        "    ...",
                                        "}"
                                    ].join('\n')}
                                />
                                <Card.Text>
                                    생성자의 매개변수 이름과 인스턴스 변수의 이름이 같을 경우에는 인스턴스 변수 앞에
                                    this 키워드를 붙여 구분해만 합니다.
                                    <br />
                                    자바에서는 this 참조 변수를 사용하여 인스턴스 변수에 접근할 수 있습니다.
                                    <br />
                                    이러한 this 참조 변수를 사용할 수 있는 영역은 인스턴스 메서드뿐이며,
                                    클래스 메서드에서는 사용할 수 없습니다.
                                    <br />
                                    모든 인스턴스 메서드에는 this 참조 변수가 숨겨진 지역 변수로 존재하고 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> this() 메소드
                                </Card.Title>
                                <Card.Text>
                                    this() 메소드는 생성자 내부에서만 사용할 수 있으며, 같은 클래스의 다른 생성자를 호출할 때 사용합니다.
                                    this() 메소드에 인수를 전달하면, 생성자 중에서 메소드 시그니처가 일치하는 다른 생성자를 찾아 호출해 줍니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default SectionRender;