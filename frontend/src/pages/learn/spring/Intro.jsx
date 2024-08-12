import { Row, Col, Card, Alert } from 'react-bootstrap';
import { BsSubtract, BsPinAngle } from 'react-icons/bs';
import { Title, Span, Sup, Code, List } from 'components/elements/Elements'; // Components
import ExtSection from 'components/ExtSection';
import ExtCard from 'components/ExtCard';
import BsCard from 'components/BsCard';
import BsAlert from 'components/BsAlert';
import ExtAccordion from 'components/ExtAccordion';
import PageTitle from 'layouts/PageTitle';

const PageRender = () => {
    const style = {
        whiteSpace : 'pre-line'
    };

    return(
        <>
            <Title
                text="Learn SPRING"
            />

            <PageTitle
                title="스프링 프레임워크(Spring Framework)"
                depth1="Learn"
                depth2="Spring"
                depth3="Introduction"
            />

            <ExtSection
                data={[
                    {
                        title : '스프링 프레임워크',
                        subtitle : 'Spring Framework',
                        body : [
                            {
                                text : [
                                    "자바 엔터프라이즈 개발을 위한 오픈 소스 애플리케이션 프레임워크입니다.",
                                    "\n스프링이라고 불리며 동적인 웹 사이트를 개발하기 위한 서비스를 제공하고 있습니다."
                                ]
                            }
                        ]
                    },
                    {
                        title : '스프링 탄생 배경',
                        body : [
                            {
                                text : [
                                    'Spring이 등장하기 전 애플리케이션의 업무 로직을 담당하는 EJB(Enterprise Java Beans)가 Java의 표준 기술이었습니다.',
                                    '\n엔터프라이즈 자바빈즈(Enterprise JavaBeans, EJB)는 기업환경의 시스템을 구현하기 위한 서버측 컴포넌트 모델입니다.',
                                    '\n즉, EJB는 애플리케이션의 업무 로직을 가지고 있는 서버 애플리케이션이며, EJB 사양은 Java EE의 자바 API 중 하나로 주로 웹 시스템에서 JSP는 화면 로직을 처리하고 EJB는 업무 로직을 처리하는 역할을 합니다.',
                                    '\n\n문제는 EJB는 인스턴스 풀링, 트랜잭션 관리, 컴포넌트 생명주기 등의 특징이 있어 기술적으로 복잡한 로직을 핵심 로직에서 분리하는데 성공은 했지만, 이를 위해서 오로지 EJB만을 위한 환경과 사양을 맞추어야 하는 상황이 발생하여 프레임워크가 무거워지고 개발자에게 더 큰 부담이었습니다.',
                                    '\n특히 Java의 큰 특장점인 객체지향적 특성을 지킬 수 없게 되었다는 것이 가장 큰 리스크였습니다.',
                                    '\n\n또한 스트럿츠(Struts)라는 프레임워크도 있었지만 스트럿츠는 스트럿츠는 작은 규모의 프로젝트에 더 적합하며, 간단하고 빠른 개발을 선호하는 경우 선택하였고, 사용법이 비교적 간단하여 초기 학습에 더 용이하였지만, 지원 커뮤니티와 문서화 상태가 스프링보다 적었고, 프레임워크의 버그에 대한 대응도 많이 느렸습니다.',
                                    '\n\n결국 많은 종류의 프레임워크가 등장했고, 그 중 Java 진영에서는 대표적인 표준 기술로써 EJB와 스트럿츠가 등장했지만 개발하기 복잡하고 무겁다는 단점 때문에 경량급 프레임워크인 Spring이 등장하여 많은 프로젝트에서 사용하게 되었습니다.',
                                ]
                            }
                        ]
                    }
                ]}
            />

            <section className="section">
                <Row>
                    <Col lg={12}>
                        <BsCard
                            title="스프링과 스프링부트 차이점"
                            content={[
                                {
                                    text : [
                                        'Spring과 Spring Boot는 모두 스프링 프레임워크를 기반으로 한 자바 웹 개발 프레임워크입니다.'
                                    ,   '\n둘 간에는 몇 가지 차이점이 있습니다.'
                                    ,   '\n\nSpring은 스프링 프레임워크의 핵심 모듈을 모아서 만든 프레임워크입니다.'
                                    ,   '\nSpring에서는 개발자가 직접 설정 파일을 작성하여 스프링 컨테이너를 구성하고, 필요한 빈 객체를 등록하고, 빈 객체 간의 의존성을 설정해야 합니다.'
                                    ,   'Spring은 특정한 구성을 위해 추가적인 라이브러리와 설정이 필요합니다.'
                                    ,   '\n\nSpring Boot는 스프링 프레임워크를 보다 쉽게 사용할 수 있도록 만든 프레임워크입니다.'
                                    ,   'Spring Boot에서는 개발자가 설정 파일을 작성할 필요 없이, 프로젝트의 설정과 라이브러리 의존성을 자동으로 처리해주는 기능을 제공합니다.'
                                    ,   '또한, Spring Boot는 실행 가능한 JAR 파일을 만들 수 있습니다.'
                                    ,   '\nSpring Boot는 Spring에서 제공하는 여러 기능들을 자동으로 설정하여 개발자가 보다 쉽게 사용할 수 있도록 해줍니다.'
                                    ,   '\n\n예를 들어, Spring Boot는 스프링 MVC, 스프링 Data JPA, 스프링 Security 등의 기능을 자동으로 설정하며, 개발자가 별도로 설정 파일을 작성하지 않아도 사용할 수 있습니다.'
                                    ,   '또한, Spring Boot는 Actuator라는 모니터링과 관리를 위한 기능을 제공하여, 애플리케이션의 상태를 모니터링하고, 필요한 조치를 취할 수 있도록 해줍니다.'
                                    ,   '\n\n이러한 차이점들은 Spring과 Spring Boot의 사용 목적과 방식을 크게 달리 합니다.'
                                    ,   'Spring은 개발자가 직접 설정 파일을 작성하고, 빈 객체를 등록하고, 빈 객체 간의 의존성을 설정하는 것을 요구하는 반면,'
                                    ,   'Spring Boot는 개발자가 보다 쉽게 스프링을 사용할 수 있도록 설정과 의존성 처리 등을 자동으로 처리합니다.'
                                    ].join(' ')
                                }

                            ]}
                            alert={{
                                title : '요약',
                                content : [
                                    '스프링(Spring)은 프레임워크이며, 스프링 부트(Spring Boot)는 스프링 프레임워크를 기반으로 한 도구입니다.'
                                ,   '\n스프링은 설정 파일을 작성해야 하지만, 스프링 부트는 자동 설정을 제공하여 간편하게 개발할 수 있습니다.'
                                ,   '또한, 스프링 부트는 내장 서버를 제공하여 쉽게 웹 애플리케이션을 실행할 수 있습니다.'
                                ,   '\nSpring은 스프링 프레임워크를 보다 세밀하게 제어하고자 하는 경우에, Spring Boot는 빠르고 간단하게 스프링 애플리케이션을 개발하고자 하는 경우에 사용됩니다.'
                                ].join(' ')
                            }}
                        />
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 스프링 프레임워크 특징
                                </Card.Title>

                                <ExtAccordion
                                    style={{ whiteSpace : 'pre-line' }}
                                    data={[
                                        {
                                            header : '자바 엔터프라이즈(Java Enterprise)',
                                            body : [
                                                'Spring은 엔터프라이즈 개발의 복잡성을 걷어내고 보다 편하게 개발할 수 있는 본질적인 솔루션을 제공합니다. 이것은 기존 기술이나 프레임워크와 차별성을 두고 개발할 수 있는 방법입니다.',
                                                '\n이전 기술에 비해 상대적으로 덜 복잡하기에 도입할 기술적인 부분에 신경쓰기보다 애플리케이션의 비즈니스 로직 자체에 집중할 수 있게 해줍니다.',
                                                '\n즉, 필수 요구사항을 만족시켜줌과 동시에 개발하는 데 어렵고 복잡한 부분을 덜어준다는 점입니다.'
                                            ]
                                        },
                                        {
                                            header : '경량급 오픈소스(Open Source)',
                                            body : [
                                                'Spring은 오픈소스이기 때문에 개인이나 기업 모두가 무료로 Spring을 통해 웹 애플리케이션 개발을 할 수 있도록 해주며, 필요할 경우 Spring의 일부를 변경해서 사용할 수 있습니다.',
                                                '\n또한 경량급이라고 함은, 작은 규모의 소스코드로 이루어졌다는 의미인데 Spring은 결코 그렇지는 않습니다. 오히려 대략 20개 정도의 모듈로 이루어진 방대한 규모의 프레임워크입니다.',
                                                '\n그렇다면 왜 경량급이라 하는가?',
                                                '\n여기서의 경량급이라는 표현은 Spring이 처음 등장하던 시절의 EJB에 대항하기 위해 자주 사용되던 표현으로 EJB에 비해서 경량급이 때문입니다.'
                                            ]
                                        },
                                        {
                                            header : '애플리케이션 프레임워크(Application Framework)',
                                            body : [
                                                '프레임워크는 어떠한 목적을 달성하기 위해 복잡하게 얽혀있는 문제를 해결하기 위한 구조이며, 소프트웨어 개발에 있어 하나의 뼈대 역할을 하는 것으로 정의할 수 있습니다.',
                                                '\n일반적으로 라이브러리나 프레임워크는 어떠한 목표나 문제를 해결하기 위해서 만들어지게 되는데, 그 중 프레임워크는 애플리케이션에서 주로 동작하는 핵심 분야에 집중하여 특정 목적을 달성할 수 있도록 관련된 표준이나 뼈대의 역할을 수행하는 의미를 지닙니다.',
                                                '\n\n애플리케이션 프레임워크(Application Framework)는 소프트웨어 개발자가 응용 소프트웨어의 표준 구조를 구현하기 위해 사용하는 소프트웨어 프레임워크로 구성된다고 정의할 수 있습니다.',
                                                '\n즉, 애플리케이션의 특정 계층을 구현하는 데 초점을 두기보다 전반적인 애플리케이션의 전 계층을 아우르는 구조로 구현하기 위함이며, 애플리케이션 프레임워크는 애플리케이션 개발에 전체 과정을 빠르고 편하게 진행하는 것에 집중하는 구조의 프레임워크라 이해하면 될 것입니다.',
                                                '\n\n따라서 Spring은 애플리케이션 프레임워크의 한 종류로써, Java 진영에서 엔터프라이즈 개발을 담당하는 애플리케이션 프레임워크로 사용되어지고 있습니다.'
                                            ]
                                        },
                                        {
                                            header : 'POJO(Plain Old Java Object)',
                                            body : [
                                                '오래된 방식의 간단한 자바 오브젝트라는 말로서 Java EE 등의 중량 프레임워크들을 사용하게 되면서 해당 프레임워크에 종속된 무거운 객체를 만들게 된 것에 반발해서 사용되게 된 용어입니다.',
                                                '\n\nPOJO는 순수 Java만을 통해 생성한 객체를 뜻한다고 볼 수 있습니다.',
                                                '\n즉, 다른 기술을 사용하지 않고 Java로만 이루어진, Java의 스펙에 정의된 기술만을 사용하여 만든 객체입니다. 이로써 스프링 프레임워크에서 POJO를 사용하여 다른 기술과의 의존성이 줄어들어 테스트 및 유지 보수가 편리한 유연성을 가집니다.'
                                            ]
                                        },
                                        {
                                            header : '제어의 역전 IOC(Inversion of control)',
                                            body : [
                                                '자바 프로그램에서는 각 객체들이 프로그램의 흐름을 결정하고 각 객체를 직접 생성하고 조작하는 작업(객체를 직접 생성하여 메서드 호출)을 사용자가 제어하는 구조였습니다.',
                                                ' 하지만 IOC가 적용된 경우, 객체의 생성을 특별한 관리 위임 주체에게 맡깁니다. 이 경우 사용자는 객체를 직접 생성하지 않고, 객체의 생명주기를 컨트롤하는 주체는 다른 주체가 됩니다.',
                                                '\n이처럼 사용자의 제어권을 다른 주체에게 넘기는 것을 IOC(제어의 역전) 라고 합니다.'
                                            ]
                                        },
                                        {
                                            header : 'AOP(Aspect-Oriented Programming)',
                                            body : [
                                                'AOP는 관점 지향 프로그래밍입니다. 어떠한 기준을 정하고, 관점을 나누어서 각 관점 별로 모듈화를 하여 사용하는 방식입니다.',
                                                '비즈니스 로직과 공통 기능으로 구분을 하고, 공통 기능은 필요한 시점에 불러와서 적용하는 프로그래밍 방법입니다.',
                                                '\n따라서 핵심 로직을 변경하지 않고 부가기능을 추가할 수 있기 때문에 개발 및 유지 보수가 용이해지며 코드의 재사용 성과 가독성도 높이고 전체적인 구조의 개선이 가능해집니다.'
                                            ]
                                        }
                                    ]}
                                />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={ process.env.PUBLIC_URL + '/assets/img/spring/spring-module.png' }
                            />
                            <Card.Body>
                                <Card.Title>
                                    <BsSubtract /> 스프링 프레임워크 주요 모듈
                                </Card.Title>
                                <ExtAccordion
                                    className="accordion-flush"
                                    style={{ whiteSpace : 'pre-line' }}
                                    data={[
                                        {
                                            header : "Spring Core (Spring container)",
                                            body : [
                                                "Spring 프레임워크의 근간이 되는요소로 IoC(또는 DI) 기능을 지원하는 영역을 담당합니다.",
                                                "\n빈 저장소를 기반으로 빈 클래스들을 제어할 수 있는 기능을 지원하기도 합니다.",
                                                "\n빈 저장소의 경우, IOC 패턴이 적용되어 객체 구성부터 의존성 처리까지 모든 일을 처리하는 핵심적인 역할을 합니다."
                                            ]
                                        },
                                        {
                                            header : "Spring Context",
                                            body : [
                                                "Spring Core에서 지원하는 기능 외의 추가적인 기능들을 지원합니다.",
                                                "\nJNDI, EJB, Validation, Scheduiling, Internaliztaion 등 엔터프라이즈 서비스들을 포함하고 있습니다."
                                            ]
                                        },
                                        {
                                            header : "Spring DAO",
                                            body : [
                                                "JDBC 기반의 DAO개발을 좀 더 쉽고, 일관된 방법으로 개발하는 것이 가능하도록 지원합니다.",
                                                "\nSpring DAO는 추상 레이어를 지원함으로써 코딩이나 예외처리 하는 부분을 간편화 시켜 일관된 방법으로 코드를 짤 수 있게 도와줍니다."
                                            ]
                                        },
                                        {
                                            header : "Spring ORM",
                                            body : [
                                                "객체 관계형 도구를 사용할 수 있도록 Hibernate, IBatis, JDO와의 결합을 지원합니다.",
                                                "\nSpring ORM을 이용할 경우 Hibernate, IBatis, JDO 프레임워크와 쉽게 통합하는 것이 가능합니다."
                                            ]
                                        },
                                        {
                                            header : "Spring AOP",
                                            body : [
                                                "Spring 프레임워크에 관점지향 프로그래밍을 할 수 있도록 지원하는 기능입니다.",
                                                "\n트랜잭션이나 로깅, 보안과 같이 여러 모듈에서 공통적으로 사용하는 기능의 경우 해당 기능을 분리하여 관리할 수 있습니다."
                                            ]
                                        },
                                        {
                                            header : "Spring Web",
                                            body : [
                                                "Web 기반의 응용프로그래램에 대한 context를 제공하여 Web Application 개발에 필요한 기본적인 기능을 지원합니다."
                                            ]
                                        },
                                        {
                                            header : "Spring MVC",
                                            body : [
                                                "Spring 프레임워크에서 독립적으로 Web UI Layer에 Model-View-Controller를 지원하기 위한 기능입니다.",
                                                "\nVelocity, Excel, PDF와 같은 다양한 UI 기술들을 사용하기 위한 API를 제공합니다.",
                                                "\nDispatcherServlet이 Controller 역할을 담당하여 각종 요청을 적절한 서비스에 분산시켜주며 이를 각 서비스들이 처리를 하여 결과를 생성하고 그 결과는 다양한 형식의 View 서비스들로 화면에 표시될 수 있도록 합니다."
                                            ]
                                        }]
                                    }
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default PageRender;