import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter

const SectionRender = () => {
    const
        title = "의존성 주입(Dependency Injection)",
        breadcrumbs = [ "Learn", "Spring", "Dependency Injection" ];

    return (
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
                    title="의존성 주입"
                    subtitle="DI, Dependency Injection"
                >
                    <BsCardText>
                        <span className="text-primary">의존성 주입(Dependency Injection)</span>은 객체 지향 프로그래밍에서
                        중요한 디자인 패턴 중 하나입니다.
                        의존성 주입은 객체가 필요로 하는 의존 객체를 외부에서 제공(주입)하는 방식으로, 객체 간의 결합도를
                        낮추는 데 도움을 줍니다.
                    </BsCardText>

                    <BsCardText>
                        의존성 주입을 통해 객체는 자신이 사용할 <span className="text-danger">의존 객체를 직접 생성하지 않고,
                        외부에서 생성된 객체를 주입받기 때문</span>입니다.
                        이로 인해 객체는 자신의 구현에만 집중할 수 있으며, 변경에 유연하게 대응할 수 있습니다.
                    </BsCardText>

                    <BsCardText>
                        의존성 주입은 주로 생성자 주입, 세터 주입, 인터페이스 주입의 세 가지 방식으로 이루어집니다.
                        {' '}<span className="text-primary">생성자 주입</span>은 객체 생성 시점에 의존성을 주입하는 방식이며,
                        {' '}<span className="text-primary">세터 주입</span>은 객체 생성 후 세터 메서드를 통해 의존성을
                        주입하는 방식입니다. <span className="text-primary">인터페이스 주입</span>은 의존성 주입을 위한
                        별도의 인터페이스를 사용하는 방식입니다.
                    </BsCardText>

                    <BsCardText>
                        의존성 주입의 장점으로는 <span className="text-danger">코드의 재사용성 증가, 코드의 유지보수성 향상,
                        객체 간의 결합도 감소, 단위 테스트 용이성 증가</span> 등이 있습니다.
                        특히, 스프링 프레임워크에서 제공하는 의존성 주입 기능은 이러한 장점을 극대화합니다.
                    </BsCardText>

                    <BsCardText>
                        따라서, 의존성 주입은 현대 소프트웨어 개발에서 중요한 역할을 하며, 스프링 프레임워크와 함께
                        사용될 때 그 효과가 배가됩니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="의존성 주입 방식"
                    subtitle="생성자 주입"
                >
                    <BsCardText>
                        생성자 주입은 클래스의 생성자를 통해서 의존성을 주입해주는 방식입니다.
                        생성자 주입은 인스턴스가 생성될때 1회 호출되는것이 보장됩니다.
                        생성자 주입시 필드에 <code>final</code> 키워드를 사용할 수 있습니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "@Controller"
                        ,   "public class PetController {"
                        ,   ""
                        ,   "    private final PetService petService;"
                        ,   ""
                        ,   "    @Autowired"
                        ,   "    public PetController(PetService petService) {"
                        ,   "        this.petService = petService;"
                        ,   "    }"
                        ,   "}"
                        ].join('\n')}
                    />

                    <BsCardText>
                        생성자 주입시에는 클래스 내 생성자가 한개, 주입받을 객체가 Bean으로 등록 두 특징과 Lombok
                        라이브러리를 통해서 더 간편하게 작성이 가능합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="의존성 주입 방식"
                    subtitle="필드 주입"
                >
                    <BsCardText>
                        필드 주입은 클래스에 선언된 필드에 생성된 객체를 주입해주는 방식입니다.
                        필드에 주입할때는 어노테이션을 사용합니다.
                        스프링에서 제공하는 <code>@Autowired</code> 어노테이션을 주입할 필드위에 명시해줍니다.
                    </BsCardText>

                    <Highlight
                        language="java"
                        codestring={[
                            "@Controller"
                        ,   "public class PetController {"
                        ,   "    @Autowired"
                        ,   "    private PetService petService;"
                        ,   "}"
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;