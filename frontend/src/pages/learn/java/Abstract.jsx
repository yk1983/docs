import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "추상화(Abstract)",
        breadcrumbs = [ "Learn", "Java", "Abstract" ];

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
                    title="추상화"
                    subtitle="Abstract"
                >
                    <BsCardText>
                        추상화의 사전적 의미는 실체 간에 공통되는 특성을 추출한 것을 말합니다.
                        자바에서 추상화는 클래스들의 중요하고 공통된 성질들을 추출하여 부모 클래스를 선정하는 개념입니다.
                    </BsCardText>

                    <UlList
                        header="추상화의 정의"
                        items={[
                            "특정 클래스를 상속받은 경우, 부모의 특정 메서드들을 무조건 재정의하도록 강제하는 기법입니다."
                        ,   "특정 메서드를 재정의하도록 강제함으로써, 자식 클래스들을 작성하기 위한 가이드의 역할을 합니다."
                        ,   "추상화 기법은 자바 클래스를 작성하기 위한 설계도를 소스코드 형태로 제시하는 역할을 합니다."
                        ]}
                    />

                    <UlList
                        header="추상화의 장점"
                        items={[
                            "상속을 통해 간결한 코드"
                        ,   "생산성과 가독성 증가"
                        ,   "에러 감소"
                        ,   "유지 보수시 시간 단축"
                        ,   "코드의 재사용성 증가"
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="추상 클래스"
                    subtitle="Abstract Class"
                >
                    <BsCardText>
                        자바에서는 하나 이상의 추상 메소드를 포함하는 클래스를 가리켜 추상 클래스(abstract class)라고 합니다.
                        이러한 추상 클래스는 객체 지향 프로그래밍에서 중요한 특징인 다형성을 가지는 메소드의 집합을 정의할 수 있도록 해줍니다.
                        <br />
                        즉, 반드시 사용되어야 하는 메소드를 추상 클래스에 추상 메소드로 선언해 놓으면,
                        이 클래스를 상속받는 모든 클래스에서는 이 추상 메소드를 반드시 재정의해야 합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "abstract class 클래스이름 {"
                        ,   "    ..."
                        ,   "    abstract 반환타입 메소드이름();"
                        ,   "    ..."
                        ,   "}"
                        ].join('\n')}
                    />

                    <BsCardText>
                        이러한 추상 클래스는 동작이 정의되어 있지 않은 추상 메소드를 포함하고 있으므로, 인스턴스를 생성할 수 없습니다.
                        추상 클래스는 먼저 상속을 통해 자식 클래스를 만들고, 만든 자식 클래스에서 추상 클래스의
                        모든 추상 메소드를 오버라이딩하고 나서야 비로소 자식 클래스의 인스턴스를 생성할 수 있게 됩니다.
                    </BsCardText>

                    <Note
                        variant="info"
                        title="추상 클래스(Abstract Class)"
                        content={[
                            "추상 클래스는 추상 메소드를 포함하고 있다는 점을 제외하면, 일반 클래스와 모든 점이 같습니다."
                        ,   "즉, 생성자와 필드, 일반 메소드도 포함할 수 있습니다."
                        ].join(' ')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="추상 메서드"
                    subtitle="Abstract Method"
                >
                    <BsCardText>
                        추상 메서드(abstract method)란 자식 클래스에서 반드시 오버라이딩해야만 사용할 수 있는 메서드를
                        의미합니다.
                        <br />
                        자바에서 추상 메서드를 선언하여 사용하는 목적은 추상 메서드가 포함된 클래스를 상속받는
                        자식 클래스가 반드시 추상 메서드를 구현하도록 하기 위함입니다.
                        <br />
                        <br />
                        모듈처럼 중복되는 부분이나 공통적인 부분은 미리 다 만들어진 것을 사용하고, 이를 받아
                        사용하는 쪽에서는 자신에게 필요한 부분만을 재정의하여 사용함으로써 생산성이 향상되고 배포 등이
                        쉬워지기 때문입니다.
                        <br />
                        추상 메소드는 선언부만이 존재하며, 구현부는 작성되어 있지 않습니다.
                        작성되지 않은 구현부를 자식 클래스에서 오버라이딩(Overriding)하여 구현하는 것 입니다.
                        <br />
                        <br />
                        결국 추상 메서드는 추상 클래스에서만 선언이 가능하며, 자식 클래스가 구현해야 하는 메서드의
                        가이드라인을 제공하는 역활을 합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "abstract 반환타입 메소드이름();"
                        ]}
                    />

                    <UlList
                        header="추상 메서드 선언"
                    >
                        <LiItem>
                            <code>abstract</code> 키워드를 사용하여 메서드를 정의
                        </LiItem>
                        <LiItem>
                            선언부만 존재하고, 구현부를 위한 블록이 존재하지 않음
                            (중괄호(<code>&#123;&#125;</code>) 대신 문장의 끝을 알리는 세미콜론(<code>;</code>)으로 끝남)
                        </LiItem>
                        <LiItem>
                            추상 클래스를 상속받으면 자식은 부모의 모든 추상 메서드를 재정의
                        </LiItem>
                    </UlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="예제"
                    subtitle="추상 클래스 예제"
                >
                    <Highlight
                        language="java"
                        codestring={[
                            "abstract class Animal {"
                        ,   "    abstract void cry();"
                        ,   "}"
                        ,   ""
                        ,   "class Cat extends Animal {"
                        ,   "    void cry() {"
                        ,   "        System.out.println(\"냐옹!\");"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "class Dog extends Animal {"
                        ,   "    void cry() {"
                        ,   "        System.out.println(\"멍멍!\");"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "public class AbstractEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        // Animal a = new Animal(); // 추상 클래스는 인스턴스를 생성할 수 없음."
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
                        추상 클래스인 Animal 클래스는 추상 메소드인 cry() 메소드를 가지고 있습니다.
                        Animal 클래스를 상속받는 자식 클래스인 Dog 클래스와 Cat 클래스는 cry() 메소드를 오버라이딩해야만 비로소 인스턴스를 생성할 수 있습니다.
                    </BsCardText>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;