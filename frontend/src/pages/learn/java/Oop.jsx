import { Helmet } from 'react-helmet-async';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import { BsSubtract, BsFeather, BsPinAngle } from 'react-icons/bs';
import PageTitle from 'layouts/PageTitle';
// Components
import { Sup, Span, Code } from 'components/elements/Elements';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    return(
        <>
            <Helmet>
                <title>Learn JAVA</title>
            </Helmet>

            <PageTitle
                title="객체지향프로그래밍(object-oriented programming)"
                depth1="Learn"
                depth2="Java"
                depth3="object-oriented programming"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 절차지향프로그래밍 <Sup text="Procedural Programming" />
                                </Card.Title>
                                <Card.Text>
                                    Procedural Programming에서 Procedural를 "절차적"으로 번역해버려서 마치 절차적으로 실행하는 것이 중점이 되는 것처럼 보이게 되는데,
                                    실제로 프로그래밍은 왼쪽에서 오른쪽 위에서 아래로 절차적이지 않은 프로그래밍이란 존재하지 않습니다.
                                    (실제로는 Procedural는 "절차"라는 의미가 아닌 프로시저의 의미입니다.)
                                    <br />
                                    따라서 절차적 프로그래밍이란 단순히 순차적인 명령 수행이 아니라 <Span text="루틴, 서브루틴, 메서드, 함수 등(이를 통틀어 프로시저라고 합니다.)" />을
                                    이용한 프로그래밍 패러다임을 뜻합니다. (명령형 프로그래밍의 일종입니다.)
                                    <br />
                                    이 패러다임에서는 프로시저 콜, 즉 함수 호출을 통해서 추상화와 재사용성을 얻어내는 것이 본질이기 때문입니다.
                                </Card.Text>

                                <h6>
                                    <BsFeather /> 장점
                                </h6>
                                <ul>
                                    <li>함수를 통해 코드의 재활용성이 높아짐</li>
                                    <li>프로그램 흐름을 쉽게 볼 수 있으므로 코드의 가독성이 높아짐</li>
                                    <li>모듈화와 구조화가 더 용이해짐</li>
                                </ul>

                                <h6>
                                    <BsFeather /> 단점
                                </h6>
                                <ul>
                                    <li>프로시저를 호출하는 것은 그냥 코드를 쓰는 것보다 시간이 매우 많이 소모됨</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 객체지향프로그래밍 <Sup text="object-oriented programming" />
                                </Card.Title>
                                <Card.Text>
                                    프로그램을 단순히 데이터와 처리 방법으로 나누는 것이 아니라, 프로그램을 수많은 <Span text="객체(object)" />
                                    라는 기본 단위로 나누고 이들의 상호 작용으로 서술하는 방식입니다.
                                    <br />
                                    객체란 <Span text="메서드, 변수" />를 가지며, 특정 역할을 수행하도록 정의한, 추상적인 개념입니다.
                                    <br />
                                    객체 지향 프로그래밍(<abbr title="Object-Oriented Programming">OOP</abbr>)은
                                    현실 세계의 사물을 객체로 추상화하여 프로그램에 적용하는 프로그램을 객체들의 집합으로
                                    모델링하여, 객체 간의 상호작용을 통해 로직을 구성하는 프로그래밍 패러다임입니다. (즉, 모든 데이터를 객체(Object)로 취급합니다.)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 객체 <Sup text="Object" />
                                </Card.Title>
                                <Card.Text>
                                    객체를 정의하면, 넓은 의미로 객체는 실세계에 존재하거나 생각할 수 있는 것을 뜻합니다.
                                    <br />
                                    <br />
                                    컴퓨터 공학에서의 객체는 <Span text="변수, 자료 구조, 함수, 메서드, 식별자에 의해 참조된 메모리상의 값" />등을
                                    의미하고, 객체 지향 프로그래밍에서의 객체는 <Span text="변수, 함수, 자료 구조의 조합이 될 수 있는데, 특히 객체지향 프로그래밍에서 클래스를 기반으로 한 변수를 클래스의 인스턴스" />라고 정의합니다.
                                    <br />
                                    <br />
                                    자바 언어 설명서 (The java Language Specification)에서는 객체란 클래스의 인스턴스나 배열을 말한다고 정의되어 있습니다.
                                    (우리가 개발할 자바 프로그래밍에서의 객체는 속성과 기능을 가지는 프로그램의 단위를 정의합니다.)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 캡슐화 <Sup text="encapsulation" />
                                </Card.Title>
                                <Card.Text>
                                    변수와 함수를 하나의 단위로 묶는 것을 의미합니다. 데이터의 번들링(bundling)입니다.
                                    대개 프로그래밍 언어에서 이 번들링은 클래스를 통해 구현되며, 해당 클래스의 인스턴스 생성을 통해 클래스 안에 포함된 멤버 변수와 메서드에 쉽게 접근할 수 있습니다.
                                    <br />
                                    또한 프로그램의 세부 구현을 외부로 드러나지 않도록 특정 모듈 내부로 감추는 역활도 합니다.
                                    내부의 구현은 감추고 모듈 내에서 응집도를 높이며, 외부로의 노출을 최소화하여 모듈 간의 결합도를 떨어뜨려 유연함과 유지 보수성을 높입니다.
                                    <br />
                                    일반적으로 <Span text="public, protected, private" />의 접근 제한이 사용됩니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 상속 <Sup text="inheritance" />
                                </Card.Title>
                                <Card.Text>
                                    상속은 자식 클래스가 부모 클래스의 특성과 기능을 그대로 물려받는 것을 말합니다.
                                    기능의 일부분을 변경해야 하는 경우 자식 클래스에서 상속받은 그 기능만을 수정해서 다시 정의하는 <Span text="오버라이딩(overriding)" />을 합니다.
                                    <br />
                                    상속은 캡슐화를 유지하면서 클래스의 재사용이 용이하도록 해줍니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 다형성 <Sup text="polymorphism" />
                                </Card.Title>
                                <dl>
                                    <dt>
                                        <BsFeather /> 서브타입 다형성(subtype polymorphism / inclusion polymorphism / subtyping)
                                    </dt>
                                    <dd>
                                        기초 클래스 또는 인터페이스를 구현하는 상위 클래스를 생성하고, 해당 클래스를
                                        상속받는 다수의 하위 클래스들을 만들어 상위 클래스의 포인터나 참조변수 등이
                                        하위 클래스의 객체를 참조하게 하는 것으로, 각각의 하위 클래스는 상위 클래스의
                                        메서드 위에 자신이 매소드를 덮어 쓰는 메서드 오버라이딩(method overriding)을
                                        수행하고, 상위 클래스의 참조 변수가 어떤 하위 클래스의 객체를 참조하느냐에 따라
                                        호출되는 메서드가 달라지게됩니다.
                                    </dd>
                                    <dt>
                                        <BsFeather /> 매개변수 다형성(parametric polymorphism)
                                    </dt>
                                    <dd>
                                        타입을 매개 변수로 받아 새로운 타입을 되돌려주는 기능입니다.
                                        타입 매개 변수를 정의한 클래스 혹은 메서드는 사용할 때 매개 변수에 타입을 지정하게 되며, 컴파일시 지정한 타입에 따라서 해석됩니다.
                                        <br />
                                        자바에서는 <span className="text-primary">제네릭(generic), 메서드 오버로딩(mehtod overloading),
                                        묵시적 형변환(implicit polymorphism), 명시적 형변환(explicit polymorphism)</span>이 있습니다.
                                    </dd>
                                </dl>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 클래스 <Sup text="Class" />
                                </Card.Title>
                                <Card.Text>
                                    자바에서 클래스는 객체 지향 프로그래밍의 기본적인 개념 중 하나입니다.
                                    <br />
                                    클래스는 프로그램에서 사용될 객체의 틀을 정의하며, 객체를 생성하기 위한 설계도 역할을 합니다.
                                    <br />
                                    클래스는 여러 가지 객체의 상태를 나타내는 필드(멤버 변수)와 객체의 행동(메서드)을 포함하며,
                                    이들을 적절히 구성하여 객체의 동작을 정의합니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 인스턴스 <Sup text="Instance" />
                                </Card.Title>
                                <Card.Text>
                                    자바에서 클래스를 사용하기 위해서는 우선 해당 클래스 타입과 객체를 선언해야 합니다.
                                    클래스로부터 객체를 선언하는 과정을 클래스의 <Span text="인스턴스화" />라고하며,
                                    이렇게 선언된 해당 클래스 타입의 객체를 <Span text="인스턴스(instance)" />라고합니다.
                                    (즉, 인스턴스는 메모리에 할당된 객체를 의미합니다.)
                                    <br />
                                    자바에서는 하나의 클래스로부터 여러개의 인스턴스를 생성할 수 있습니다.
                                    이렇게 생성된 인스턴스는 각각 독립된 메모리 공간에 자신만의 필드를 가질수 있습니다.
                                    하지만 클래스의 모든 메소드는 해당 클래스에서 생성된 모든 인스턴스가 공유됩니다.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Alert variant="success">
                            <Alert.Heading>
                                <BsPinAngle /> 객체 <Sup text="object" />와 인스턴스 <Sup text="instance" />
                            </Alert.Heading>
                            <p>
                                객체 지향 프로그래밍에서의 객체와 인스턴스의 차이점은 객체는 선언, 인스턴스는 실체화를 의미합니다.
                                <br />
                                예를 들어, <Code text="Animal cat = new Animal();" />는 <Code text="cat" />은 객체로
                                선언되고 <Code text="new Animal();" />로 클래스를 생성하므로 Animal의 인스턴스라고 표현하는 것이 바람직합니다.
                            </p>
                        </Alert>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 메서드 <Sup text="Method" />
                                </Card.Title>
                                <Card.Text>
                                    자바에서 클래스는 멤버(member)로 속성을 표현하는 필드(field)와 기능을 표현하는 메소드(method)를 가집니다.
                                    그중에서 메소드(method)란 어떠한 특정 작업을 수행하기 위한 명령문의 집합이라 할 수 있습니다.
                                </Card.Text>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "접근제어자 반환타입 메소드이름(매개변수목록) { // 선언부",
                                        "    // 구현부",
                                        "}"
                                    ].join('\n')}
                                />
                                <ul>
                                    <li>접근제어자 : 해당 메소드에 접근할 수 있는 범위</li>
                                    <li>반환타입 : 메소드가 모든 작업을 마치고 반환하는 데이터의 타입</li>
                                    <li>메소드이름 : 메소드를 호출하기 위한 이름</li>
                                    <li>매개변수목록 : 메소드 호출 시에 전달되는 인수의 값을 저장할 변수</li>
                                    <li>구현부 : 메소드의 고유 기능을 수행하는 명령문</li>
                                </ul>
                                <Card.Text>
                                    자바에서는 하나의 클래스에 같은 이름의 메소드를 둘 이상 정의할 수 없습니다.
                                    하지만 메소드 오버로딩(overloading)을 이용하면, 같은 이름의 메소드를 중복하여 정의할 수 있습니다.
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