import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from 'react-bootstrap';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, DlList, DtItem, DdItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
import BsModalEx1 from 'components/modal/BsModalEx1';
import BsModalEx2 from 'components/modal/BsModalEx2';

const SectionRender = () => {
    const
        title = "메서드(Method)",
        breadcrumbs = [ "Learn", "Java", "Method" ];

    const [modalShow1, setModalShow1] = useState(false);
    // const handleClose1 = () => setModalShow1(false);
    const handleShow1 = () => setModalShow1(true);

    const [modalShow2, setModalShow2] = useState(false);
    // const handleClose2 = () => setModalShow2(false);
    const handleShow2 = () => setModalShow2(true);

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
                    title="메서드"
                    subtitle="Method"
                >
                    <BsCardText>
                        다른 프로그래밍 언어에는 함수가 별도로 존재합니다.
                        (예를 들어 JavaScript의 function 키워드로 선언된 함수)
                        하지만 자바는 클래스를 떠나 존재하는 것은 있을 수 없기 때문에 자바의 함수는 따로
                        존재하지 않고 클래스 내에 존재합니다.
                        자바는 이러한 클래스 내의 함수를 메서드(method)라고 부른다.
                    </BsCardText>

                    <Note
                        title="함수(Function)와 메서드(Method)"
                        content={[
                            "함수와 메서드가 공존하는 언어(예를 들어, 파이썬)에서는 두 개를 구분하여 말합니다."
                        ,   "하지만 자바는 메서드와 함수를 구분하여 말하지 않습니다."
                        ].join(' ')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="메서드의 정의"
                >
                    <BsCardText>
                        자바에서 메서드를 정의하는 방법은 다음과 같습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "접근제어자 리턴타입 메서드명(매개변수1, 매개변수2, ...) { // 선언부"
                        ,   "    // 구현부"
                        ,   "    ..."
                        ,   "    return 반환값;"
                        ,   "}"
                        ].join('\n')}
                    />

                    <DlList>
                        <DtItem>
                            접근제어자
                        </DtItem>
                        <DdItem>
                            접근제어자는 해당 메서드에 접근할 수 있는 범위를 명시합니다.
                            (생략가능하며, 생략시 기본 접근제어자는 <code>default</code> 가 됩니다.)
                        </DdItem>
                        <DtItem>
                            리턴타입
                        </DtItem>
                        <DdItem>
                            메서드가 모든 작업을 마치고 반환하는 결과의 데이터 타입을 명시합니다.
                            외부에서 메서드를 호출하면 메서드는 외부에서 값을 입력받아 매개변수에 저장하고
                            구현부에서 실행하여 리턴값을 다시 돌려주는 역할을 합니다.
                            (즉, 반환타입은 메서드를 실행한 후의 결과값 타입입니다.)
                        </DdItem>
                        <DtItem>
                            메서드명
                        </DtItem>
                        <DdItem>
                            메서드의 기능이 드러나도록 식별자의 규칙에 맞게 이름을 작성해야 합니다.
                            <br />
                            메서드명은 동사로 이름을 짓고, 처음 시작하는 문자는 소문자로 시작하고, 여러 단어의 조합으로
                            만들어지는 경우 카멜케이스(camelcase)형식으로 명칭을 짓습니다.
                        </DdItem>
                        <DtItem>
                            매개변수(Parameters)
                        </DtItem>
                        <DdItem>
                            메서드 호출 시에 전달되는 인수의 값을 저장할 변수를 명시합니다.
                        </DdItem>
                        <DtItem>
                            구현부
                        </DtItem>
                        <DdItem>
                            실행할 코드를 작성합니다.
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="제어자"
                    subtitle="Modifier"
                >
                    <BsCardText>
                        자바에서 제어자는 클래스, 필드, 메서드, 생성자 등에 외부로부터의 접근을 제어하는 것을 의미합니다.
                        자바의 제어자는 접근 제어자와 기타 제어자로 구분할 수 있습니다.
                    </BsCardText>

                    <DlList
                        items={[
                            {
                                term : '접근 제어자'
                            ,   description : 'public, protected, default, private'
                            }
                        ,   {
                                term : '기타 제어자'
                            ,   description : 'static, final, abstract, native, transient, synchronized 등'
                            }
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="접근제어자"
                    subtitle="Access Modifier"
                    image={{
                        variant : "bottom"
                    ,   src : "/assets/img/java/access_modifier.png"
                    }}
                >
                    <BsCardText>
                        접근 제어자는 클래스 외부로의 불필요한 데이터 노출을 방지하고, 외부로부터 데이터가
                        임의로 변경되지 않도록 막을 수 있습니다. 즉, <span className="text-primary">정보 은닉(data hiding)
                        </span>과 연관이 있습니다.
                    </BsCardText>

                    <DlList
                        header="접근제어자의 종류는 다음과 같습니다."
                        items={[
                            {
                                term : "public"
                            ,   description : "외부 클래스에서 자유롭게 사용할 수 있습니다."
                            }
                        ,   {
                                term : "protected"
                            ,   description : "같은 패키지 또는 자식 클래스에서 사용할 수 있습니다."
                            }
                        ,   {
                                term : "private"
                            ,   description : "외부에서 사용할 수 없습니다. (클래스 내부에서만 사용가능 합니다.)"
                            }
                        ,   {
                                term : "default"
                            ,   description : "같은 패키지에 소속된 클래스에서만 사용할 수 있습니다."
                            }
                        ]}
                    />

                    <BsCardText>
                        접근 제한 범위에 순으로 나열하면, <code>public > protected > default > private</code> 순입니다.
                        접근 제어자를 작성하지 않으면, 자동으로 기본값인 <code>default</code> 가 설정됩니다.
                    </BsCardText>

                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={handleShow1}
                    >
                        <BsBoxArrowUpRight /> 접근제어자 예제_1
                    </Button>{' '}
                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={handleShow2}
                    >
                        <BsBoxArrowUpRight /> 접근제어자 예제_2
                    </Button>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="private 접근 제어자"
                    image={{
                        variant : "top"
                    ,   src : "/assets/img/java/access_private.png"
                    }}
                >
                    <BsCardText>
                        private 접근 제어자를 사용하여 선언된 클래스 멤버는 외부에 공개되지 않으며, 외부에서는 직접
                        접근할 수 없습니다.
                        즉, 자바 프로그램은 private 멤버에 직접 접근할 수 없으며, 해당 객체의 public 메소드를 통해서만
                        접근할 수 있습니다.
                        <br />
                        따라서 private 멤버는 public 인터페이스를 직접 구성하지 않고, 클래스 내부의 세부적인 동작을
                        구현하는 데 사용됩니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="public 접근 제어자"
                    image={{
                        variant : "top"
                    ,   src : "/assets/img/java/access_public.png"
                    }}
                >
                    <BsCardText>
                        public 접근 제어자를 사용하여 선언된 클래스 멤버는 외부로 공개되며, 해당 객체를 사용하는 프로그램
                        어디에서나 직접 접근할 수 있습니다.
                        자바 프로그램은 public 메소드를 통해서만 해당 객체의 private 멤버에 접근할 수 있습니다.
                        <br />
                        따라서 public 메소드는 private 멤버와 프로그램 사이의 인터페이스(interface) 역할을 수행한다고
                        할 수 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="default 접근 제어자"
                    image={{
                        variant : "top"
                    ,   src : "/assets/img/java/access_default.png"
                    }}
                >
                    <BsCardText>
                        자바에서는 클래스 및 클래스 멤버의 접근 제어의 기본값으로 default 접근 제어를 별도로 명시하고 있습니다.
                        이러한 default 를 위한 접근 제어자는 따로 존재하지 않으며, 접근 제어자가 지정되지 않으면 자동적으로
                        default 접근 제어를 가지게 됩니다.
                        <br />
                        default 접근 제어를 가지는 멤버는 같은 클래스의 멤버와 같은 패키지에 속하는 멤버에서만 접근할 수 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="protected 접근 제어자"
                    image={{
                        variant : "top"
                    ,   src : "/assets/img/java/access_protected.png"
                    }}
                >
                    <BsCardText>
                        자바 클래스는 private 멤버로 정보를 은닉하고, public 멤버로 사용자나 프로그램과의 인터페이스를 구축합니다.
                        여기에 부모 클래스(parent class)와 관련된 접근 제어자가 하나 더 존재합니다.
                        <br />
                        protected 멤버는 부모 클래스에 대해서는 public 멤버처럼 취급되며, 외부에서는 private 멤버처럼 취급됩니다.
                        <br />
                        클래스의 protected 멤버에 접근할 수 있는 영역은 다음과 같습니다.
                    </BsCardText>

                    <UlList
                        items={[
                            "이 멤버를 선언한 클래스의 멤버"
                        ,   "이 멤버를 선언한 클래스가 속한 패키지의 멤버"
                        ,   "이 멤버를 선언한 클래스를 상속받은 자식 클래스(child class)의 멤버"
                        ]}
                    />
                </BsCard>
            </BsContainer>

            <BsModalEx1
                title="접근제어자 예제 1"
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />

            <BsModalEx2
                title="접근제어자 예제 2"
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
        </>
    );
}

export default SectionRender;