import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle'; // layouts
import { Span, Code, Sup } from 'components/elements/Elements'; // Components
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const Overloading = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="오버로딩(Overloading)"
                depth1="Learn"
                depth2="Java"
                depth3="Overloading"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 메서드 시그니처 <Sup text="method signature" />
                                </Card.Title>
                                <Card.Text>
                                    메서드 오버로딩의 핵심은 바로 <Span text="메서드 시그니처(method signature)" />에 있습니다.
                                    메서드 시그니처란 메서드의 선언부에 명시되는 매개변수의 리스트를 가리킵니다.
                                    만약 두 메서드가 매개변수의 개수와 타입, 그 순서까지 모두 같다면, 이 두 메서드의 시그니처는 같다고 할 수 있습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 메서드 오버로딩 <Sup text="method overloading" />
                                </Card.Title>
                                <Card.Text>
                                    <Span text="메서드 오버로딩(overloading)" />이란 같은 이름의 메서드를 중복하여 정의하는 것을 의미합니다.
                                    <br />
                                    원래 하나의 클래스 내에서 같은 이름으로 메서드를 둘 이상 가질 수 없습니다.
                                    하지만 매개변수의 개수나 타입을 다르게 하면, 하나의 메서드 이름으로 여러개의 메서드를 작성 할 수 있습니다.
                                    <br />
                                    즉, 메서드 오버로딩은 서로 다른 시그니처를 갖는 여러 메서드를 같은 이름으로 정의하는 것이라고 할 수 있습니다.
                                    <br />
                                    <br />
                                    메서드 오버로딩을 사용함으로써 메서드에 사용되는 이름을 절약할 수 있습니다.
                                    또한, 메서드를 호출할 때 전달해야 할 매개변수의 타입이나 개수에 대해 크게 신경을 쓰지 않고 호출할 수 있게 됩니다.
                                    즉, 개발자가 필요한 메서드를 매개변수의 차이로 인해서 다른 이름의 메서드나 메서드명에
                                    순번(넘버링)을 붙여서 새로 만들지 않게되어 프로그래밍의 효율이 좋아집니다.
                                    <br />
                                    <br />
                                    메서드 오버로딩은 객체 지향 프로그래밍의 특징 중 하나인 <Span text="다형성(polymorphism)" />을 구현하는 방법 중 하나입니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 메서드 오버로딩 예제 <Sup text="example" />
                                </Card.Title>
                                <Card.Text>
                                    메서드 오버로딩의 대표적인 예로는 println() 메서드를 들 수 있습니다.
                                    <Code text="println()" /> 메서드는 전달받는 매개변수의 타입에 따라 다음과 같이 다양한
                                    원형 중에서 적절한 원형을 호출하게 됩니다.
                                </Card.Text>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "println()",
                                        "println(boolean x)",
                                        "println(char x)",
                                        "println(char[] x)",
                                        "println(double x)",
                                        "println(float x)",
                                        "println(int x)",
                                        "println(long x)",
                                        "println(Object x)",
                                        "println(String x)"
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 메서드 오버로딩의 조건
                                </Card.Title>
                                <Card.Text>
                                    자바에서 메서드 오버로딩이 성립하기 위해서는 다음과 같은 조건을 만족해야 합니다.
                                </Card.Text>
                                <ul>
                                    <li>메서드의 이름이 같아야 합니다.</li>
                                    <li>메서드의 시그니처, 즉 매개변수의 개수 또는 타입이 달라야 합니다.</li>
                                </ul>
                                <Card.Text>
                                    메서드 오버로딩은 반환 타입과는 관계가 없습니다.
                                    따라서, 만약 메서드의 시그니처는 같은데 반환 타입만이 다른 경우에는 오버로딩이 성립하지 않습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 메서드 오버로딩 예제 <Sup text="example" />
                                </Card.Title>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "class OverloadingMethods {",
                                        "    public void print() {",
                                        "        System.out.println(\"매개변수X - 오버로딩1\");",
                                        "    }",
                                        "",
                                        "    String print(Integer a) {",
                                        "        System.out.println(\"Integer - 오버로딩2\");",
                                        "        return a.toString();",
                                        "    }",
                                        "",
                                        "    void print(String a) {",
                                        "        System.out.println(\"String - 오버로딩3\");",
                                        "        System.out.println(a);",
                                        "    }",
                                        "",
                                        "    String print(Integer a, Integer b) {",
                                        "        System.out.println(\"Integer, Integer - 오버로딩4\");",
                                        "        return a.toString() + b.toString();",
                                        "    }",
                                        "}",
                                        "",
                                        "public class OverloadingEx {",
                                        "    public static void main(String[] args) {",
                                        "        OverloadingMethods om = new OverloadingMethods();",
                                        "",
                                        "        om.print();",
                                        "        System.out.println(om.print(3));",
                                        "        om.print(\"Hello!\");",
                                        "        System.out.println(om.print(4, 5));",
                                        "    }",
                                        "}"
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default Overloading;