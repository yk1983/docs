import { Helmet } from 'react-helmet-async';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList } from 'components/List';

const SectionRender = () => {
    const
        title = "제어의 역전(Inversion of Control)",
        breadcrumbs = [ "Learn", "Spring", "Inversion of Control" ];

    return(
        <>
            <Helmet>
                <title>{ title }</title>
            </Helmet>

            <Breadcrumbs
                title={ title }
                breadcrumbs={ breadcrumbs }
            />

            <BsContainer className="section">
                <BsCard
                    col={ 12 }
                    title="제어의 역전"
                    subtitle="IoC, Inversion of Control"
                >
                    <BsCardText>
                        <span className="text-primary">제어의 역전(Inversion of Control)</span>은 클래스 간의 결합을
                        느슨하게 해 테스트와 유지 관리를 더 쉽게 하는 설계(디자인) 원칙입니다.
                        <br />
                        제어의 역전이란 메인 프로그램에서 컨테이너나 프레임워크로 객체와 객체의
                        의존성에 대한 제어(control)를 옮기는 것을 말합니다.
                        <br />
                        IoC는 설계(디자인) 패턴이 아니라 원칙입니다.
                        세부 구현 사항은 개발자에게 달려있으며, IoC는 높은 레벨의 가이드라인을 제공하는 것 뿐입니다.
                        IoC와 DI(의존성 주입, Dependency Injection)가 종종 같은 의미로 사용되지만, 의존성 주입은 IoC가
                        구현된 한 가지 예일 뿐입니다.
                    </BsCardText>

                    <BsCardText>
                        예를 들어, 일반적인 상황에서는 개발자가 직접 객체를 제어하였습니다.
                        {' '}<code>new</code> 연산자를 통해 객체를 생성하였고, 객체와의 의존성을 맺어주고, 값을 초기화
                        하는 등의 역활을 Spring 프레임워크에서는 XML 파일 또는 어노테이션 방식으로 스프링 컨테이너에
                        Bean(객체)를 등록하기만 하면, 스프링 컨테이너에서 Bean의 생명주기(<span className="text-primary">
                        생성 &rarr; 의존성 설정 &rarr; 초기화 &rarr; 소멸</span>)를 전부 관리해줍니다.
                    </BsCardText>

                    <BsCardText>
                        즉, 객체에 대한 제어권이 컨테이너로 역전되기 때문에 <span className="text-danger">제어의 역전(
                        IoC, Inversion of Control)</span>이라고 하는 것입니다.
                    </BsCardText>

                    <UlList
                        header="제어의 역전(IoC)이 구현된 예"
                        items={[
                            "의존성 주입(Dependency Injection)"
                        ,   "서비스 로케이터 패턴(Service Locator Pattern)"
                        ,   "이벤트 드리븐 프로그램(이벤트 기반 프로그램), 순차적 프로그램과 반대되는 프로그램(Event-driven Programs, as opposed to Sequential Programs)"
                        ]}
                    />

                    <UlList
                        header="장점"
                        items={[
                            "개발자는 객체 관리에 덜 신경쓸 수 있게 되어 다른 부분에 집중"
                        ,   "약한 결합을 이용하여 객체 간 의존 관계를 쉽게 변경할 수 있음"
                        ,   "코드의 재사용성과 높은 유지보수성"
                        ]}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;