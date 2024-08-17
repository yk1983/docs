import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, DlList, DtItem, DdItem } from 'components/List';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "내부 클래스(Inner Class)",
        breadcrumbs = [ "Learn", "Java", "Inner Class" ];
        
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
                    col={ 6 }
                    title="내부 클래스"
                    subtitle="Inner Class"
                >
                    <BsCardText>
                        <span className="text-primary">내부 클래스(inner class)</span>란 하나의 클래스 내부에 선언된 또
                        다른 클래스를 의미합니다.
                        이러한 내부 클래스는 외부 클래스(outer class)에 대해 두 개의 클래스가 서로 긴밀한 관계를 맺고
                        있을 때 선언할 수 있습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "class Outer {     // 외부 클래스"
                        ,   "    ..."
                        ,   "    class Inner { // 내부 클래스"
                        ,   "        ..."
                        ,   "    }"
                        ,   "    ..."
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>
    
                <BsCard
                    col={ 6 }
                    title="내부 클래스의 장점"
                >
                    <UlList
                        items={[
                            "내부 클래스에서 외부 클래스의 멤버에 손쉽게 접근할 수 있게 됩니다."
                        ,   "서로 관련 있는 클래스를 논리적으로 묶어서 표현함으로써, 코드의 캡슐화를 증가시킵니다."
                        ,   "외부에서는 내부 클래스에 접근할 수 없으므로, 코드의 복잡성을 줄일 수 있습니다."
                        ]}
                    />
                </BsCard>
    
                <BsCard
                    col={ 12 }
                    title="내부 클래스의 종류"
                >
                    <BsCardText>
                        내부 클래스는 필드와 마찬가지로 선언된 위치에 따라 구분됩니다.
                    </BsCardText>
    
                    <DlList>
                        <DtItem>
                            정적 클래스(static class)
                        </DtItem>
                        <DdItem>
                            외부 클래스 영역에 선언된 클래스 중에서 static 키워드를 가지는 클래스를 정적 클래스
                            (static class)라고 합니다.
                            <br />
                            이러한 정적 클래스는 주로 외부 클래스(outer class)의 클래스 메소드에 사용될 목적으로 선언됩니다.
                        </DdItem>
                        <DtItem>
                            인스턴스 클래스(instance class)
                        </DtItem>
                        <DdItem>
                            외부 클래스 영역에 선언된 클래스 중에서 static 키워드를 가지지 않는 클래스를 인스턴스 클래스
                            (instance class)라고 합니다.
                            <br />
                            이러한 인스턴스 클래스는 주로 외부 클래스(outer class)의 인스턴스 변수나 인스턴스 메소드에
                            사용될 목적으로 선언됩니다.
                        </DdItem>
                        <DtItem>
                            지역 클래스(local class)
                        </DtItem>
                        <DdItem>
                            지역 클래스(local class)란 외부 클래스의 메소드나 초기화 블록에 선언된 클래스를 의미합니다.
                            <br />
                            이러한 지역 클래스는 선언된 블록 내에서만 사용할 수 있습니다.
                        </DdItem>
                        <DtItem>
                            익명 클래스(anonymous class)
                        </DtItem>
                        <DdItem>
                            익명 클래스(anonymous class)란 다른 내부 클래스와는 달리 이름을 가지지 않는 클래스를 의미합니다.
                            <br />
                            익명 클래스는 클래스의 선언과 동시에 객체를 생성하므로, 단 하나의 객체만을 생성하는 일회용
                            클래스입니다.
                            따라서 생성자를 선언할 수도 없으며, 오로지 단 하나의 클래스나 단 하나의 인터페이스를 상속받거나
                            구현할 수 있을 뿐입니다.
                            <br />
                            이러한 익명 클래스는 매우 제한적인 용도에 사용되며, 구현해야 하는 메소드가 매우 적은 클래스를
                            구현할 때 사용됩니다.
                        </DdItem>
                    </DlList>
    
                    <Highlight
                        language="java"
                        codestring={[
                            "// 익명 클래스는 선언과 동시에 생성하여 참조변수에 대입함."
                        ,   "클래스이름 참조변수이름 = new 클래스이름() {"
                        ,   "    // 메소드의 선언"
                        ,   "};"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;