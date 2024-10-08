import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "인터페이스(Interface)",
        breadcrumbs = [ "Learn", "Java", "Interface" ];

    return(
        <>
            <Helmet>
                <title>{ title }</title>
            </Helmet>

            <Breadcrumbs
                title={ title }
                breadcrumbs={ breadcrumbs }
            />

            <BsContainer className="section" >
                <BsCard
                    col={ 12 }
                    title="인터페이스"
                    subtitle="Interface"
                >
                    <BsCardText>
                        자바는 클래스를 이용하여 다중 상속을 할 경우 메소드 출처의 모호성 등 여러 가지 문제가 발생할 수
                        있어 클래스를 통한 다중 상속은 지원하지 않습니다.
                        하지만 자식 클래스가 여러 부모 클래스를 상속받을 수 있다면, 다양한 동작을 수행할 수 있다는 장점을
                        가지게 될 것입니다.
                        <br />
                        다중 상속의 이점을 버릴 수는 없기에 자바에서는 인터페이스라는 것을 통해 다중 상속을 지원하고
                        있습니다.
                    </BsCardText>

                    <BsCardText>
                        인터페이스(interface)란 다른 클래스를 작성할 때 기본이 되는 틀을 제공하면서, 다른 클래스 사이의
                        중간 매개 역할까지 담당하는 일종의 추상 클래스를 의미합니다.
                    </BsCardText>

                    <BsCardText>
                        자바에서 추상 클래스는 추상 메소드뿐만 아니라 생성자, 필드, 일반 메소드도 포함할 수 있습니다.
                        하지만 인터페이스(interface)는 오로지 추상 메소드와 상수만을 포함할 수 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="인터페이스의 선언"
                >
                    <BsCardText>
                        인터페이스를 선언할 때에는 접근 제어자와 함께 <code>interface</code> 키워드를 사용하면 됩니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "접근제어자 interface 인터페이스이름 {"
                        ,   "    public static final 타입 상수이름 = 값;"
                        ,   "    ..."
                        ,   "    public abstract 메소드이름(매개변수목록);"
                        ,   "    ..."
                        ,   "}"
                        ].join('\n')}
                    />

                    <BsCardText>
                        단, 클래스와는 달리 인터페이스의 모든 필드는 <code>public static final</code> 이어야 하며,
                        모든 메소드는 <code>public abstract</code> 이어야 합니다.
                        <br />
                        이 부분은 모든 인터페이스에 공통으로 적용되는 부분이므로 이 제어자는 생략할 수 있습니다.
                        이렇게 생략된 제어자는 컴파일 시 자바 컴파일러가 자동으로 추가해 줍니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="인터페이스의 구현"
                >
                    <BsCardText>
                        인터페이스는 추상 클래스와 마찬가지로 자신이 직접 인스턴스를 생성할 수는 없습니다.
                        따라서 인터페이스가 포함하고 있는 추상 메소드를 구현해 줄 클래스를 작성해야만 합니다.
                        <br />
                        클래스를 상속받는 것이 아니므로 <code>extends</code>가 아닌 <code>implements</code> 키워드로
                        인터페이스를 상속 받아야합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={["class 클래스이름 implements 인터페이스이름 { ... }"]}
                    />

                    <BsCardText>
                        만약 모든 추상 메소드를 구현하지 않는다면, <code>abstract</code> 키워드를 사용하여 추상 클래스로
                        선언해야 합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "interface Animal {"
                        ,   "    public abstract void cry();"
                        ,   "}"
                        ,   ""
                        ,   "class Cat implements Animal {"
                        ,   "    public void cry() {"
                        ,   "        System.out.println(\"냐옹!\");"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "class Dog implements Animal {"
                        ,   "    public void cry() {"
                        ,   "        System.out.println(\"멍멍!\");"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "public class interfaceEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        Cat c = new Cat();"
                        ,   "        Dog d = new Dog();"
                        ,   ""
                        ,   "        c.cry();"
                        ,   "        d.cry();"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <BsCardText>
                        자바에서는 다음과 같이 상속과 구현을 동시에 할 수 있습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={["class 클래스이름 extend 상위클래스이름 implements 인터페이스이름 { ... }"]}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="인터페이스의 다중 상속"
                >
                    <BsCardText>
                        인터페이스는 인터페이스로부터만 상속을 받을 수 있으며, 여러 인터페이스를 상속받을 수 있습니다.
                        <br />
                        아래의 예제는 Cat 클래스와 Dog 클래스는 각각 Animal과 Pet이라는 두 개의 인터페이스를 동시에
                        구현하고 있습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "interface Animal {"
                        ,   "    public abstract void cry();"
                        ,   "}"
                        ,   ""
                        ,   "interface Pet {"
                        ,   "    public abstract void play();"
                        ,   "}"
                        ,   ""
                        ,   "class Cat implements Animal, Pet {"
                        ,   "    public void cry() {"
                        ,   "        System.out.println(\"냐옹!\");"
                        ,   "    }"
                        ,   "    public void play() {"
                        ,   "        System.out.println(\"쥐 잡기 놀이하자~!\");"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "class Dog implements Animal, Pet {"
                        ,   "    public void cry() {"
                        ,   "        System.out.println(\"멍멍!\");"
                        ,   "    }"
                        ,   "    public void play() {"
                        ,   "        System.out.println(\"산책가자~!\");"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "public class InterfaceEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        Cat c = new Cat();"
                        ,   "        Dog d = new Dog();"
                        ,   ""
                        ,   "        c.cry();"
                        ,   "        c.play();"
                        ,   "        d.cry();"
                        ,   "        d.play();"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />]
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="인터페이스의 장점"
                >
                    <BsCardText>
                        인터페이스를 사용하면 다중 상속이 가능할 뿐만 아니라 다음과 같은 장점을 가질 수 있습니다.
                    </BsCardText>

                    <UlList
                        items={[
                            "대규모 프로젝트 개발 시 일관되고 정형화된 개발을 위한 표준화가 가능합니다."
                        ,   "클래스의 작성과 인터페이스의 구현을 동시에 진행할 수 있으므로, 개발 시간을 단축할 수 있습니다."
                        ,   "클래스와 클래스 간의 관계를 인터페이스로 연결하면, 클래스마다 독립적인 프로그래밍이 가능합니다."
                        ]}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;