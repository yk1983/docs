import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "상속(Inheritance)",
        breadcrumbs = [ "Learn", "Java", "Inheritance" ];

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
                    title="상속"
                    subtitle="Inheritance"
                >
                    <BsCardText>
                        <span className="text-primary">상속(Inheritance)</span>은 캡슐화, 추상화와 더불어 객체 지향
                        프로그래밍을 구성하는 중요한 특징중 하나로, 기존의 클래스에 기능을 추가하거나 재정의하여 새로운
                        클래스를 정의하는 것을 의미합니다.
                        <br />
                        상속을 이용하면 기존에 정의되어 있는 클래스의 모든 필드와 메소드를 물려받아, 새로운 클래스를
                        생성할 수 있습니다.
                        이때 기존에 정의되어 있던 클래스를 <span className="text-primary">부모 클래스(parent class) 또는
                        상위 클래스(super class), 기초 클래스(base class)</span>라고 합니다. 그리고 상속을 통해 새롭게
                        작성되는 클래스를 <span className="text-primary">자식 클래스(child class) 또는 하위 클래스(sub
                        class), 파생 클래스(derived class)</span>라고 합니다.
                        <br />
                        따라서, 상속을 이용하면 이미 구현되어있는 클래스의 기능을 재사용 또는 재정의해서 만들 수 있기
                        때문에 효율적이고, 개발시간을 단축시켜 주기 때문에 사용하는 것입니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="상속의 장점"
                >
                    <UlList
                        items={[
                            "기존에 작성된 클래스를 재활용할 수 있습니다."
                        ,   "자식 클래스 설계 시 중복되는 멤버를 미리 부모 클래스에 작성해 놓으면, 자식 클래스에서는 해당 멤버를 작성하지 않아도 됩니다."
                        ,   "클래스 간의 계층적 관계를 구성함으로써 다형성의 문법적 토대를 마련합니다."
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="클래스 상속"
                    subtitle="extends 키워드"
                >
                    <BsCardText>
                        클래스의 상속은 상속받고자 하는 자식 클래스명 옆에 <code>extends</code> 키워드를 붙이고, 상속할
                        부모 클래스명을 적습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "public Class Parent { ... }; // 부모 클래스",
                            "public Class Child extends parent { ... }; // 자식 클래스"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="상속 예제"
                    subtitle="Example"
                >
                    <Highlight
                        header="부모 클래스(Parent class)"
                        language="java"
                        codestring={[
                            "public class Book {",
                            "    String name; // 멤버 변수",
                            "    int price;",
                            "",
                            "    public void Print() { // 메서드",
                            "        System.out.println(\"책의 이름과 가격 : \" + name + \" \" + price);",
                            "    }",
                            "}"
                        ].join('\n')}
                    />

                    <Highlight
                        header="자식 클래스(Child class)"
                        language="java"
                        codestring={[
                            "public class MyBook extends Book {",
                            "    MyBook (String name, int price) { // 생성자",
                            "        this.name = name;",
                            "        this.price = price;",
                            "    }",
                            "",
                            "    public static void main(String[] args) {",
                            "        MyBook myBook = new MyBook(\"자바의 정석\", 36000);",
                            "        myBook.Print(); // 부모에게 상속받은 메서드 호출",
                            "    }",
                            "}"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;