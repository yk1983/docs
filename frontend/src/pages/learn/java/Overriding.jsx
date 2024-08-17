import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, LiItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "오버라이딩(Overriding)",
        breadcrumbs = [ "Learn", "Java", "Overriding" ];

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
                    title="메서드 오버라이딩"
                    subtitle="Method Overriding"
                >
                    <BsCardText>
                        <span className="text-primary">오버로딩(overloading)</span>이란 서로 다른 시그니처를 갖는 여러
                        메서드를 하나의 이름으로 정의하는 것이었습니다.
                        <br />
                        <span className="text-primary">오버라이딩(overriding)</span>이란 상속 관계에 있는 부모 클래스에서
                        이미 정의된  메서드를 자식 클래스에서 같은 시그니쳐를 갖는 메서드로 다시 정의하는 것이라고 할 수
                        있습니다.
                        <br />
                        자바에서 자식 클래스는 부모 클래스의 private 멤버를 제외한 모든 메서드를 상속받습니다.
                        이렇게 상속받은 메서드는 그대로 사용해도 되고, 필요한 동작을 위해 재정의하여 사용할 수도 있습니다.
                        즉, 메서드 오버라이딩이란 <span className="text-primary">상속받은 부모 클래스의 메서드를 재정의하여
                        사용하는 것을 의미</span>합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="메서드 오버라이딩의 조건"
                >
                    <UlList>
                        <LiItem>
                            오버라이딩이란 메소드의 동작만을 재정의하는 것이므로, 메소드의 선언부는 기존 메소드와 완전히 같아야 합니다.
                            하지만 메소드의 반환 타입은 부모 클래스의 반환 타입으로 타입 변환할 수 있는 타입이라면 변경할 수 있습니다.
                        </LiItem>
                        <LiItem>
                            부모 클래스의 메소드보다 접근 제어자를 더 좁은 범위로 변경할 수 없습니다.
                        </LiItem>
                        <LiItem>
                            부모 클래스의 메소드보다 더 큰 범위의 예외를 선언할 수 없습니다.
                            (예외(Exception)는 부모 클래스의 메소드보다 많이 선언할 수 없습니다.)
                        </LiItem>
                    </UlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="메서드 오버라이딩의 예제"
                    subtitle="Example"
                >
                    <Highlight
                        language="java"
                        codestring={[
                            "class Gyeonggi {"
                        ,   "    String print() {"
                        ,   "        return \"경기도 입니다.\";"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "class Namyangju extends Gyeonggi{"
                        ,   "    @Override"
                        ,   "    String print() {"
                        ,   "        return \"경기도 남양주입니다.\";"
                        ,   "    }"
                        ,   "}"
                        ,   ""
                        ,   "public class OverridingEx {"
                        ,   "    public static void main(String[] args) {"
                        ,   "        Namyangju namyangju = new Namyangju();"
                        ,   "        System.out.println(namyangju.print());"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <Note
                        title="@Override 어노테이션을 쓰는 이유"
                    >
                        <p>
                            프로그램 소스에서 <code>@Override</code> 어노테이션은 없어도 오버라이딩이 적용되어 정상적으로
                            잘 동작합니다.
                            그러나 <code>@Override</code> 어노테이션은 시스템에서 오버라이딩한 메서드라고 알리는 역할로
                            오버라이딩이 잘못된 경우 경고를 알려줍니다.
                            또한 <code>@Override</code>를 표시함으로써 코드 리딩 시에 해당 메서드가 오버라이딩하였다는
                            것을 쉽게 파악할 수 있다는 장점이 있습니다.
                        </p>
                    </Note>
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;