import { Helmet } from 'react-helmet-async';
import { Row, Col, Card } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
import { Sup, Code } from 'components/elements/Elements'; // Components
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const InheritanceSuper = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="super"
                depth1="Learn"
                depth2="Java"
                depth3="super"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> super 키워드
                                </Card.Title>
                                <Card.Text>
                                    <Code text="super" /> 키워드는 부모 클래스로부터 상속받은 필드나 메서드를 자식 클래스에서
                                    참조하는데 사용하는 참조 변수입니다.
                                    <br />
                                    인스턴스 변수의 이름과 지역 변수의 이름이 같을 경우 인스턴스 변수 앞에 this 키워드를 사용하여 구분할 수 있었습니다.
                                    이와 마찬가지로 부모 클래스의 멤버와 자식 클래스의 멤버 이름이 같을 경우 super 키워드를 사용하여 구별할 수 있습니다.
                                    <br />
                                    자바에서는 super 참조 변수를 사용하여 부모 클래스의 멤버에 접근할 수 있으며,
                                    this와 마찬가지로 super 참조 변수를 사용할 수 있는 대상도 인스턴스 메서드뿐이며,
                                    클래스 메서드에서는 사용할 수 없습니다.
                                </Card.Text>
                                <Highlight
                                    laguage="java"
                                    codestring={[
                                        "class Parent {",
                                        "    int a = 10;",
                                        "}",
                                        "",
                                        "class Child extends Parent {",
                                        "    void display() {",
                                        "        System.out.println(a);",
                                        "        System.out.println(this.a);",
                                        "        System.out.println(super.a);",
                                        "    }",
                                        "}",
                                        "",
                                        "public class InheritanceSuperEx {",
                                        "    public static void main(String[] args) {",
                                        "        Child ch = new Child();",
                                        "        ch.display();",
                                        "    }",
                                        "}"
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> super() 메서드
                                </Card.Title>
                                <Card.Text>
                                    this() 메소드가 같은 클래스의 다른 생성자를 호출할 때 사용된다면,
                                    super() 메소드는 부모 클래스의 생성자를 호출할 때 사용됩니다.
                                    <br />
                                    자식 클래스의 인스턴스를 생성하면, 해당 인스턴스에는 자식 클래스의 고유 멤버뿐만 아니라
                                    부모 클래스의 모든 멤버까지도 포함되어 있습니다.
                                    <br />
                                    따라서 부모 클래스의 멤버를 초기화하기 위해서는 자식 클래스의 생성자에서
                                    부모 클래스의 생성자까지 호출해야만 합니다.
                                    <br />
                                    이러한 부모 클래스의 생성자 호출은 모든 클래스의 부모 클래스인 Object 클래스의
                                    생성자까지 계속 거슬러 올라가며 수행됩니다.
                                    <br />
                                    따라서 자바 컴파일러는 부모 클래스의 생성자를 명시적으로 호출하지 않는 모든
                                    자식 클래스의 생성자 첫 줄에 자동으로 다음과 같은 명령문을 추가하여,
                                    부모 클래스의 멤버를 초기화할 수 있도록 해줍니다.
                                    <br />
                                    하지만 자바 컴파일러는 컴파일 시 클래스에 생성자가 하나도 정의되어 있지 않아야만,
                                    자동으로 기본 생성자를 추가해 줍니다.
                                    <br />
                                    만약 부모 클래스에 매개변수를 가지는 생성자를 하나라도 선언했다면,
                                    부모 클래스에는 기본 생성자가 자동으로 추가되지 않습니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default InheritanceSuper;