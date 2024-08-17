import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList, DtItem, DdItem } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "클래스(Class)",
        breadcrumbs = [ "Learn", "Java", "Class" ];

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
                    title="클래스"
                    subtitle="Class"
                >
                    <BsCardText>
                        자바에서 클래스(class)는 객체를 정의하는 틀 또는 설계도와 같은 의미로 사용되고, 이러한 설계도를
                        가지고 여러 객체를 생성하여 사용합니다.
                        <br />
                        클래스는 <span className="text-primary">객체의 상태를 나타내는 필드(멤버 변수)와 객체의 행동을
                        나타내는 메서드(method)로 구성</span>됩니다.
                        <br />
                        클래스(class)란 객체 지향 프로그래밍의 추상화(abstraction)라는 개념을 직접 구현한 것이라 할 수 있습니다.
                        자바에서는 개발자의 편의를 위해 유용하게 사용할 수 있는 많은 수의 클래스를 미리 정의하여 제공하고 있습니다.
                        또한, 개발자가 원하는 동작을 하는 새로운 클래스를 손쉽게 작성할 수도 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="클래스의 구성 요소 및 선언"
                >
                    <BsCardText>
                        자바에서 클래스는 멤버(member)로 속성을 표현하는 필드(field)와 기능을 표현하는 메소드(method)를
                        가지며, 클래스는 생성된 객체의 필드를 초기화해주는 특별한 메소드인 생성자(constructor)를 가집니다.
                    </BsCardText>

                    <BsCardText>
                        자바에서 클래스를 선언하는 방법은 <span className="text-primary">접근 제어자와 함께 class 키워드를
                        사용</span>하면 됩니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "public class Car { // 클래스",
                            "    private String modelName;   // 멤버 변수",
                            "    private int modelYear;      // 멤버 변수",
                            "",
                            "    Car(String modelName, int modelYear) { // 생성자",
                            "        this.modelName = modelName;",
                            "        this.modelYear = modelYear;",
                            "    }",
                            "",
                            "    public String getModelName() { // 메서드",
                            "        return this.modelName;",
                            "    }",
                            "",
                            "    public void setModelName(String modelName) { // 메서드",
                            "        this.modelName = modelName;",
                            "    }",
                            "}"
                        ].join('\n')}
                    />
                    <DlList>
                        <DtItem>
                            멤버 변수(필드)
                        </DtItem>
                        <DdItem>
                            클래스에 포함된 변수(variable)를 의미하고 선언된 위치에 따라 <span className="text-primary">
                            클래스 변수(static variable), 인스턴스 변수(instance variable), 지역 변수(local variable)
                            </span>로 나누어집니다.
                        </DdItem>
                        <DtItem>
                            메소드(method)
                        </DtItem>
                        <DdItem>
                            어떠한 특정 작업을 수행하기 위한 명령문의 집합이며, 모듈화를 통해 전체적으로 중복되는 코드의
                            반복을 줄일 수 있고, 가독성을 향상시킬수 있습니다.
                        </DdItem>
                        <DtItem>
                            생성자(constructor)
                        </DtItem>
                        <DdItem>
                            클래스를 가지고 객체를 생성하면, 해당 객체는 메모리에 즉시 생성 되는데, 이렇게 생성된 객체는
                            모든 인스턴스 변수가 초기화되지 않은 상태입니다.
                            자바에서는 객체의 생성과 동시에 인스턴스 변수를 원하는 값으로 초기화할 수 있는 생성자
                            (constructor)라는 메소드를 제공합니다.
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="인스턴스 생성"
                >
                    <BsCardText>
                        객체를 참조하기 위한 참조 변수를 먼저 선언하고, <span className="text-danger">new 키워드</span>를
                        사용하여 인스턴스를 생성하고, 해당 인스턴스의 주소를 미리 선언한 참조 변수에 저장하여 사용합니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "Car myCar; // 클래스이름 객체참조변수명; 선언",
                            "myCar = new Car(); // 객체참조변수이름 객체참조변수명 = new 클래스이름();"
                        ].join('\n')}
                    />

                    <BsCardText>
                        또한, 다음과 같이 참조 변수의 선언과 인스턴스의 생성을 동시에 할 수도 있습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "Car myCar = new Car(); // 참조 변수의 선언과 인스턴스의 생성"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
}

export default SectionRender;