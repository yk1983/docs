import { Row, Col, Card, Alert } from 'react-bootstrap';
import { BsSubtract, BsInfoCircle } from 'react-icons/bs';
import { Title, Sup, Code, List } from 'components/elements/Elements'; // Components
import PageTitle from 'layouts/PageTitle';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
import BsCard from 'components/BsCard';

const SectionRender = () => {
    return(
        <>
            <Title
                text="Learn JAVA"
            />

            <PageTitle
                title="다형성(Polymorphism)"
                depth1="Learn"
                depth2="Java"
                depth3="Polymorphism"
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <BsCard
                            title="다형성"
                            subtitle="Polymorphism"
                            content={[
                                {
                                    text : [
                                        '다형성(polymorphism)은 상속, 추상화와 더불어 객체 지향 프로그래밍을 구성하는 중요한 특징으로 하나의 객체가 여러 가지 타입을 가질 수 있는 것을 의미합니다.'
                                    ,   '\n자바에서는 이러한 다형성을 부모 클래스 타입의 참조 변수로 자식 클래스 타입의 인스턴스를 조할 수 있도록 하여 구현하고 있습니다.'
                                    ].join(' ')
                                }
                            ]}
                        />
                    </Col>

                    <Col lg={12}>
                        <BsCard
                            title="참조 변수의 다형성"
                            content={[
                                {
                                    text : [
                                        "자바에서는 다형성을 위해 부모 클래스 타입의 참조 변수로 자식 클래스 타입의 인스턴스를 참조할 수 있도록 하고 있습니다."
                                    ,   "\n이때 참조 변수가 사용할 수 있는 멤버의 개수가 실제 인스턴스의 멤버 개수보다 같거나 적어야 참조할 수 있습니다."
                                    ].join(' ')
                                },
                                {
                                    highlight : {
                                        language : "java"
                                    ,   content : [
                                            "class Parent { ... }"
                                        ,   "class Child extends Parent { ... }"
                                        ,   "..."
                                        ,   "Parent pa = new Parent(); // 허용"
                                        ,   "Child ch = new Child();   // 허용"
                                        ,   "Parent pc = new Child();  // 허용"
                                        ,   "Child cp = new Parent();  // 오류"
                                        ].join('\n')
                                    }
                                },
                                {
                                    text : [
                                        "특정 타입의 참조 변수로는 당연히 같은 타입의 인스턴스를 참조할 수 있습니다."
                                    ,   "(참조 변수가 사용할 수 있는 멤버의 개수가 실제 인스턴스의 멤버 개수와 같기 때문)"
                                    ].join(' ')
                                },
                                {
                                    text : [
                                        "부모 클래스 타입의 참조 변수로도 자식 클래스 타입의 인스턴스를 참조할 수 있습니다."
                                    ,   "(참조 변수가 사용할 수 있는 멤버의 개수가 실제 인스턴스의 멤버 개수보다 적기 때문)"
                                    ].join(' ')
                                },
                                {
                                    text : [
                                        "반대의 경우인 자식 클래스 타입의 참조 변수로는 부모 클래스 타입의 인스턴스를 참조할 수 없습니다."
                                    ,   "(참조 변수가 사용할 수 있는 멤버의 개수가 실제 인스턴스의 멤버 개수보다 많기 때문)"
                                    ].join(' ')
                                }
                            ]}
                            alert={{
                                title : "클래스 상속",
                                content : [
                                    "클래스는 상속을 통해 확장될 수는 있어도 축소될 수는 없으므로, 자식 클래스에서 사용할 수 있는 멤버의 개수가 언제나 부모 클래스와 같거나 많게 됩니다."
                                ].join(' ')
                            }}
                        />
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 다형성의 전제 조건
                                </Card.Title>

                                <List
                                    items={[
                                        "상속 관계"
                                    ,   "오버라이드(Override)"
                                    ,   "Upcasting(업캐스팅)"
                                    ,   "동적바인딩 사용"
                                    ]}
                                />

                                <Card.Text>
                                    부모 클래스(Animal)을 상속받은 자식 클래스(Dog, Cat)를 전제로 업캐스팅(UpCasting)을 사용하여 Animal 변수에 Dog, Cat 객체를 저장하고 eat()을 실행하면, Dog, Cat이 각각 재정의한 eat()이 출력됩니다.
                                    이것이 다형성입니다.
                                </Card.Text>

                                <Highlight
                                    language="java"
                                    codestring={[
                                        "public class Animal { // 부모 클랙스 Animal"
                                    ,   "    public void eat(){"
                                    ,   "        System.out.println(\"Eat like an animal\"); // 추상적"
                                    ,   "    }"
                                    ,   "}"
                                    ,   ""
                                    ,   "public class Dog extends Animal { // Animal을 상속받은 Dog eat() 재정의"
                                    ,   "    public void eat(){"
                                    ,   "        System.out.println(\"Eat like a dog\");"
                                    ,   "    }"
                                    ,   "}"
                                    ,   ""
                                    ,   "public class Cat extends Animal { // Animal을 상속받은 Cat eat() 재정의"
                                    ,   "    public void eat(){"
                                    ,   "        System.out.println(\"Eat like a cat\");"
                                    ,   "    }"
                                    ,   ""
                                    ,   "    public void night(){"
                                    ,   "        System.out.println(\"Their eyes shine in the night\");"
                                    ,   "    }"
                                    ,   "}"
                                    ,   ""
                                    ,   "public class PolymorphismEx {"
                                    ,   "    public static void main(String[] args) {"
                                    ,   "        Animal animal = new Dog(); // upcasting"
                                    ,   "        danimalog.eat(); // Eat like a dog"
                                    ,   ""
                                    ,   "        animal = new Cat();"
                                    ,   "        animal.eat(); // Eat like a cat -> Message Polymorphism"
                                    ,   ""
                                    ,   "        ((Cat) animal).night(); // downcasting"
                                    ,   "    }"
                                    ,   "}"
                                    ].join('\n')}
                                />
                            </Card.Body>
                            <Card.Footer>
                                <Alert variant="info">
                                    <Alert.Heading>
                                        <BsInfoCircle /> 상속관계 간 형변환(업캐스팅 <Sup text="Upcasting" />과, 다운캐스팅 <Sup text="Downcasting" />)
                                    </Alert.Heading>
                                    <p>
                                        부모를 상속받아 생성하는 객체는 Dog, Cat같은 하위 클래스여도 상위 클래스로 받을 수 있습니다.
                                        이 때, 더 큰 타입이 더 작은 타입을 받기 때문에 자동으로 형변환이 일어나며, 부모가 자식을 가리키는 이 객체 생성 방법을 업캐스팅이라고 합니다.
                                        <br />
                                        업캐스팅으로 객체를 생성하면 하위 클래스의 동작은 사용할 수 없으며,
                                        상위 클래스의 메모리만을 사용할 수 있기 때문에 원래 Dog, Cat의 eat() 동작 결과인{' '}
                                        <Code text="Eat like a dog" />, <Code text="Eat like a cat" /> 출력문을 얻지 못하게 됩니다.
                                        <br />
                                        <br />
                                        Cat의 night()는 Animal에 없기 때문에 Animal로 호출했을 때 이 메서드의 실행이 불가능합니다.
                                        다운캐스팅을 하려면 업캐스팅을 해서 만든 객체에 적용해야 합니다.
                                    </p>
                                </Alert>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 다형성 비활용 예제 <Sup text="example" />
                                </Card.Title>
                                <Card.Text>
                                    부모 클래스(Animal)을 상속받은 자식 클래스(Dog, Cat)를 전제로 다형성을 적용하지 않고 구현하였을 때,
                                    타입마다 개별적으로 display() 메서드를 하나씩, 총 2개의 메서드를 만든 예제입니다.
                                </Card.Text>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "public class PolymorphismEx {"
                                    ,   "    public static void main(String[] args) {"
                                    ,   "        Dog dog = new Dog();"
                                    ,   "        display(dog);"
                                    ,   ""
                                    ,   "        Cat cat = new Cat();"
                                    ,   "        display(cat);"
                                    ,   "    }"
                                    ,   ""
                                    ,   "    // 다형성을 사용하지 않고 구현한 display 메서드 예제"
                                    ,   "    public static void display(Dog dog) {"
                                    ,   "    	dog.eat();"
                                    ,   "    }"
                                    ,   ""
                                    ,   "    public static void display(Cat cat) {"
                                    ,   "    	cat.eat();"
                                    ,   "    }"
                                    ,   "}"
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 다형성 활용 예제 <Sup text="example" />
                                </Card.Title>
                                <Card.Text>
                                    부모 클래스(Animal)을 상속받은 자식 클래스(Dog, Cat)를 전제로 다형성을 활용하여 구현하였을 때,
                                    타입마다 개별적으로 display() 메서드를 하나씩, 총 2개의 메서드를 만든 예제입니다.
                                </Card.Text>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "public class PolymorphismEx {"
                                    ,   "    public static void main(String[] args) {"
                                    ,   "        Dog dog = new Dog();"
                                    ,   "        display(dog);"
                                    ,   ""
                                    ,   "        Cat cat = new Cat();"
                                    ,   "        display(cat);"
                                    ,   "    }"
                                    ,   ""
                                    ,   "    // 다형성을 사용하여 구현한 display 메서드 예제"
                                    ,   "    public static void display(Animal animal) {"
                                    ,   "    	animal.eat();"
                                    ,   "    }"
                                    ,   "}"
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 참조 변수의 타입 변환
                                </Card.Title>
                                <Card.Text>
                                    자바에서는 참조 변수도 다음과 같은 조건에 따라 타입 변환을 할 수 있습니다.
                                </Card.Text>
                                <ul>
                                    <li>서로 상속 관계에 있는 클래스 사이에만 타입 변환을 할 수 있습니다.</li>
                                    <li>자식 클래스 타입에서 부모 클래스 타입으로의 타입 변환은 생략할 수 있습니다.</li>
                                    <li>부모 클래스 타입에서 자식 클래스 타입으로의 타입 변환은 반드시 명시해야 합니다.</li>
                                </ul>
                                <Card.Text>
                                    참조 변수의 타입 변환도 기본 타입의 타입 변환과 마찬가지로 타입 캐스트 연산자(<Code text="()" />)를 사용합니다.
                                </Card.Text>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "(변환할타입의클래스이름) 변환할참조변수"
                                    ].join('\n')}
                                />
                                <Card.Text>
                                    참조 변수의 타입 변환을 보여주는 예제
                                </Card.Text>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "class Parent { ... }"
                                    ,   "class Child extends Parent { ... }"
                                    ,   "class Brother extends Parent { ... }"
                                    ,   "..."
                                    ,   "Parent pa01 = null;"
                                    ,   "Child ch = new Child();"
                                    ,   "Parent pa02 = new Parent();"
                                    ,   "Brother br = null;"
                                    ,   ""
                                    ,   "pa01 = ch;          // pa01 = (Parent)ch; 와 같으며, 타입 변환을 생략할 수 있음."
                                    ,   "br = (Brother)pa02; // 타입 변환을 생략할 수 없음."
                                    ,   "br = (Brother)ch;   // 직접적인 상속 관계가 아니므로, 오류 발생."
                                    ].join('\n')}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> instanceof 연산자
                                </Card.Title>
                                <Card.Text>
                                    다형성으로 인해 런타임에 참조 변수가 실제로 참조하고 있는 인스턴스의 타입을 확인하고 싶은 경우,
                                    자바에서는 <Code text="instanceof" /> 연산자를 제공하여, 참조 변수가 참조하고 있는 인스턴스의 실제 타입을 확인할 수 있도록 해줍니다.
                                </Card.Text>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "참조변수 instanceof 클래스이름"
                                    ].join('\n')}
                                />
                                <Card.Text>
                                    왼쪽에 전달된 참조 변수가 실제로 참조하고 있는 인스턴스의 타입이 오른쪽에 전달된 클래스
                                    타입이면 <Code text="true" />를 반환하고, 아니면 <Code text="false" />를 반환합니다.
                                    <br />
                                    만약에 참조 변수가 <Code text="null" />을 가리키고 있으면 <Code text="false" />를 반환합니다.
                                </Card.Text>
                                <Card.Text>
                                    아래의 코드는 참조 변수가 실제로 가리키고 있는 인스턴스의 타입을 instanceof 연산자로 확인하는 간단하게 작성된 예제입니다.
                                </Card.Text>
                                <Highlight
                                    language="java"
                                    codestring={[
                                        "class Parent { ... }"
                                    ,   "class Child extends Parent { ... }"
                                    ,   "class Brother extends Parent { ... }"
                                    ,   ""
                                    ,   "public class Polymorphism01 {"
                                    ,   "    public static void main(String[] args) {"
                                    ,   "        Parent p = new Parent();"
                                    ,   "        System.out.println(p instanceof Object); // true"
                                    ,   "        System.out.println(p instanceof Parent); // true"
                                    ,   "        System.out.println(p instanceof Child);  // false"
                                    ,   "        System.out.println();"
                                    ,   "        "
                                    ,   "        Parent c = new Child();"
                                    ,   "        System.out.println(c instanceof Object); // true"
                                    ,   "        System.out.println(c instanceof Parent); // true"
                                    ,   "        System.out.println(c instanceof Child);  // true"
                                    ,   "    }"
                                    ,   "}"
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

export default SectionRender;