import { Helmet } from 'react-helmet-async';
import { Col, Image } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { UlList, DlList, DtItem, DdItem } from 'components/List';
import Note from 'components/Note';
/**
 * Interceptor.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 2024. 8. 21.
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "인터셉터(Interceptor)",
        breadcrumbs = [ "Learn", "Java", "Interceptor" ];

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
                    title="인터셉터"
                    subtitle="Interceptor"
                >
                    <BsCardText>
                        스프링 인터셉터(Interceptor) 는 스프링 MVC 프레임워크에서 <span className="text-primary">HTTP
                        요청을 가로채어 처리</span>하는 컴포넌트입니다.
                        <br />
                        클라이언트의 요청이 컨트롤러로 전달되기 전에 사전 작업을 수행하거나, 컨트롤러의 실행 이후에 사후
                        작업을 수행할 수 있습니다.
                        즉, 서버에 들어온 Request객체를 컨트롤러의 핸들러(url에 매핑되어있는 매서드)로 도달하기 전에
                        낚아채서 개발자가 원하는 추가적인 작업을 한 후 핸들러로 보낼 수 있도록 해주는 것이 인터셉터입니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="인터셉터를 사용하는 이유?"
                >
                    <BsCardText>
                        개발자가 특정 컨트롤러의 핸들러가 실행되기 전이나 후에 추가적인 작업을 원할 때 인터셉터를 사용합니다.
                        <br />
                        스프링 인터셉터를 사용함으로써 <span className="text-danger">코드의 중복을 줄이고 관심사를 분리</span>
                        하여 개발자는 핵심 비즈니스 로직에 집중할 수 있습니다.
                        또한, 유연한 설정 방식과 다중 인터셉터 지원으로 인해 개발자는 프로젝트의 요구에 맞게 인터셉터를
                        활용할 수 있습니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="특징"
                >
                    <DlList>
                        <DtItem>전역적인 작업 처리</DtItem>
                        <DdItem>
                            스프링 인터셉터는 여러 컨트롤러에서 공통으로 처리해야 하는 작업을 중앙에서 관리할 수 있습니다.
                            예를 들어 인증이나 권한 검사, 로깅등과 같은 전역적인 작업을 인터셉터에서 처리할 수 있습니다.
                            이는 코드의 중복을 줄이고 유지보수성을 향상시키는데 도움을 줍니다.
                        </DdItem>
                        <DtItem>요청 처리 제어</DtItem>
                        <DdItem>
                            인터셉터는 HTTP 요청 전후의 처리 흐름을 제어할 수 있습니다.
                            클라이언트의 요청이 컨트롤러에 도달하기 전에 사전 작업을 수행하거나, 컨트롤러의 실행 이후에
                            사후 작업을 수행하는 등의 제어가 가능합니다.
                            이를 통해 요청의 전처리나 후처리를 담당할 수 있습니다.
                        </DdItem>
                        <DtItem>유연한 설정</DtItem>
                        <DdItem>
                            스프링 인터셉터는 다양한 방식으로 설정할 수 있습니다.
                            XML, 애노테이션, JavaConfig 등의 설정 방법을 사용하여 인터셉터를 등록하고 관리할 수 있습니다.
                            이는 개발자의 선호나 프로젝트의 요구에 맞게 유연하게 설정할 수 있도록 합니다.
                        </DdItem>
                        <DtItem>다양한 용도에 활용 가능</DtItem>
                        <DdItem>
                            스프링 인터셉터는 다양한 용도로 활용할 수 있습니다.
                            주로 인증과 권한 검사, 로깅, 트랜잭션 관리 등의 전역적인 작업을 처리하는데 사용되지만, 요청
                            처리의 어떤 단계에서든 원하는 작업을 수행할 수 있습니다.
                            예를 들어, 캐싱, 데이터 변환, 압축 등의 작업도 인터셉터를 통해 처리할 수 있습니다.
                        </DdItem>
                        <DtItem>다중 인터셉터 지원</DtItem>
                        <DdItem>
                            스프링은 다중 인터셉터를 지원하여 여러 개의 인터셉터를 등록하고 순차적으로 실행할 수 있습니다.
                            이를 통해 여러 개의 인터셉터가 각각의 작업을 수행하고 결과를 조합하여 최종 처리 결과를 도출할
                            수 있습니다.
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="장점"
                >
                    <DlList>
                        <DtItem>중앙 집중적인 공통 기능 관리</DtItem>
                        <DdItem>
                            인터셉터를 사용하면 <span className="text-primary">로그인 체크, 권한 검사, 로깅, 예외 처리</span>
                            등과 같은 공통적인 기능을 중앙에서 관리할 수 있습니다.
                            중복 코드를 제거하고 유지보수성을 향상시킬 수 있습니다.
                        </DdItem>
                        <DtItem>재사용성과 확장성</DtItem>
                        <DdItem>
                            인터셉터는 여러 컨트롤러에 적용될 수 있으며, 인터셉터 체인을 구성하여 여러 개의 인터셉터를
                            조합할 수 있습니다.
                            이로 인해 공통 기능을 간편하게 재사용하고, 필요에 따라 확장할 수 있습니다.
                        </DdItem>
                        <DtItem>요청 처리 과정 제어</DtItem>
                        <DdItem>
                            인터셉터는 요청 전(preHandle)과 후(postHandle)에 실행되는 메서드를 제공하여 요청 처리 과정을
                            세밀하게 제어할 수 있습니다.
                            예를 들어, 요청 전에 인증 체크를 수행하거나, 요청 후에 로깅 작업을 수행할 수 있습니다.
                        </DdItem>
                        <DtItem>전역 예외 처리</DtItem>
                        <DdItem>
                            인터셉터를 사용하면 예외 처리를 중앙에서 처리할 수 있습니다.
                            예외가 발생하면 인터셉터의 예외 처리 메서드를 활용하여 일관된 방식으로 예외를 처리하고
                            사용자에게 적절한 응답을 보낼 수 있습니다.
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="단점"
                >
                    <DlList>
                        <DtItem>성능</DtItem>
                        <DdItem>
                            인터셉터는 요청과 응답 사이에 위치하므로, 매 요청마다 인터셉터 체인이 실행되어야 합니다.
                            인터셉터가 많거나 복잡한 작업을 수행하는 경우 성능에 영향을 줄 수 있습니다.
                            따라서 인터셉터의 사용은 신중하게 고려되어야 합니다.
                        </DdItem>
                        <DtItem>컨트롤러와의 결합도</DtItem>
                        <DdItem>
                            인터셉터는 컨트롤러와 긴밀하게 결합되어 있습니다.
                            이는 컨트롤러의 변경에 따라 인터셉터도 변경될 수 있음을 의미합니다.
                            따라서 인터셉터의 사용은 컨트롤러와의 강한 결합도를 가질 수 있으므로 유지보수에 주의가 필요합니다.
                        </DdItem>
                        <DtItem>작업의 순서와 조건 제어</DtItem>
                        <DdItem>
                            인터셉터 체인에서 인터셉터의 실행 순서와 조건 제어를 올바르게 설정해야 합니다.
                            잘못된 순서나 조건 설정은 의도하지 않은 동작을 유발할 수 있으므로 주의가 필요합니다.
                        </DdItem>
                        <DtItem>제한된 범위</DtItem>
                        <DdItem>
                            인터셉터는 주로 웹 요청을 처리하는 데 사용됩니다.
                            따라서 웹 애플리케이션에만 적용 가능하며, 다른 종류의 요청이나 서비스에는 사용할 수 없습니다.
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="작동원리"
                    subtitle="Spring Interceptor의 작동원리"
                >
                    <DlList>
                        <DtItem>HandlerMapping 검색</DtItem>
                        <DdItem>
                            클라이언트의 요청이 들어오면 먼저 HandlerMapping 이라는 Spring 컴포넌트가 요청과 관련된 적절한
                            컨트롤러를 찾습니다.
                            HandlerMapping은 요청 URL을 기반으로 컨트롤러를 선택하는 역할을 합니다.
                        </DdItem>
                        <DtItem>Interceptor 체인 생성</DtItem>
                        <DdItem>
                            HandlerMapping은 해당 컨트롤러와 연결된 Interceptor 체인을 생성합니다.
                            Interceptor 체인은 여러개의 Interceptor 객체로 구성될 수 있으며, 각각의 Interceptor는 요청을
                            가로 채고 처리하는 역할을 수행합니다.
                        </DdItem>
                        <DtItem>PreHandle 매서드 호출</DtItem>
                        <DdItem>
                            Interceptor 체인의 각 Interceptor는 PreHandle 매서드를 호출하여 요청을 가로챕니다.
                            PreHandle 매서드는 요청을 처리하기 전에 싱행되는 매서드로, 요청에 대한 사전 작업을 수행할 수
                            있습니다.
                        </DdItem>
                        <DtItem>컨트롤러 호출</DtItem>
                        <DdItem>
                            PreHandle 메서드 실행 후, HandlerMapping은 적절한 컨트롤러를 호출합니다.
                            컨트롤러는 클라이언트 요청을 처리하고, 결과를 반환합니다.
                        </DdItem>
                        <DtItem>PostHandle 메서드 호출</DtItem>
                        <DdItem>
                            컨트롤러가 실행된 후에는 Interceptor 체인의 각 Interceptor의 PostHandle 메서드가 호출됩니다.
                            PostHandle 메서드는 컨트롤러의 실행 결과를 가로채고, 후속 작업을 수행할 수 있습니다.
                        </DdItem>
                        <DtItem>View 렌더링 및 응답</DtItem>
                        <DdItem>
                            PostHandle 메서드 실행 후, HandlerMapping은 적절한 View를 렌더링하여 클라이언트에게 응답을
                            보냅니다.
                        </DdItem>
                        <DtItem>AfterCompletion 메서드 호출</DtItem>
                        <DdItem>
                            응답이 완료되면 Interceptor 체인의 각 Interceptor의 AfterCompletion 메서드가 호출됩니다.
                            AfterCompletion 메서드는 요청 처리가 완료된 후에 실행되며, 리소스 정리나 로깅 등의 작업을
                            수행할 수 있습니다.
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="HandlerInterceptor 인터페이스"
                    image={{
                        variant : 'top'
                    ,   src : '/assets/img/spring/spring_MVC_request_life_cycle.png'
                    }}
                >
                    <BsCardText>
                        스프링 인터셉터는 HandlerInterceptor 인터페이스를 구현하여 작성됩니다.
                        이 인터페이스는 세 가지 메서드를 가지고 있습니다.
                    </BsCardText>

                    <DlList>
                        <DtItem>preHandle()</DtItem>
                        <DdItem>
                            컨트롤러 실행 전에 호출되는 메서드입니다.
                            요청을 가로채고 사전 작업을 수행할 수 있습니다.
                            이 메서드가 true를 반환하면 요청은 계속 진행되고, false를 반환하면 요청 처리가 중단됩니다.
                        </DdItem>
                        <DtItem>postHandle()</DtItem>
                        <DdItem>
                            컨트롤러 실행 이후에 호출되는 메서드입니다.
                            컨트롤러의 실행 결과에 대한 후처리 작업을 수행할 수 있습니다.
                        </DdItem>
                        <DtItem>afterCompletion()</DtItem>
                        <DdItem>
                            뷰 렌더링까지 완료된 후에 호출되는 메서드입니다.
                            최종적인 작업 처리를 수행할 수 있습니다.
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="filter, aop 비교"
                >
                    <UlList
                        header="Spring Interceptor"
                        items={[
                            "Spring MVC 컴포넌트에 종속적으로 동작합니다. 주로 웹 애플리케이션의 요청과 응답 사이에 위치하여 작업을 수행합니다."
                        ,   "컨트롤러(Controller)에 집중된 기능을 처리하고, 공통 기능을 중앙에서 관리하고 재사용할 수 있습니다."
                        ,   "PreHandle, PostHandle, AfterCompletion 등의 메서드를 제공하여 요청 처리의 다양한 단계에서 작업을 수행할 수 있습니다."
                        ,   "컨트롤러와의 강한 결합도를 가질 수 있으며, 주로 웹 애플리케이션에 사용됩니다."
                        ]}
                    />

                    <UlList
                        header="Filter"
                        items={[
                            "Java Servlet 스펙에 정의된 필터(Filter) 인터페이스를 구현하여 동작합니다. 서블릿 컨테이너에서 동작하는 웹 애플리케이션 전체에 영향을 미칩니다."
                        ,   "웹 애플리케이션의 요청과 응답을 처리하는데 사용됩니다. 주로 요청과 응답의 헤더 수정, 인코딩 변환, 보안 처리 등을 수행합니다."
                        ,   "DispatcherServlet 이전에 동작하므로 Spring MVC와 독립적으로 동작하며, 여러 개의 서블릿에 적용할 수 있습니다."
                        ,   "Spring Interceptor와 달리 컨트롤러와의 결합도가 낮아서 다양한 웹 애플리케이션에 사용될 수 있습니다."
                        ]}
                    />

                    <UlList
                        header="AOP(Aspect-Oriented Programming)"
                        items={[
                            "관점 지향 프로그래밍(Aspect-Oriented Programming)의 개념을 기반으로 동작합니다. 애플리케이션 전체의 핵심 비즈니스 로직에 공통 기능을 적용하는 데 사용됩니다."
                        ,   "주요한 관심사를 횡단(cross-cutting)하는 방식으로 구현하며, 코드의 흩어진 곳에 횡단 관심사를 분리하여 모듈화합니다."
                        ,   "주요한 관심사를 독립적인 모듈로 구현한 어드바이스(Advice)를 정의하고, 어드바이스를 적용할 타깃(Target) 객체와 결합시켜 동작합니다."
                        ,   "주로 로깅, 트랜잭션 관리, 보안 등과 같은 공통 기능에 사용됩니다."
                        ]}
                    />

                    <Note
                        title="요약"
                        content={[
                            "Spring Interceptor: Spring MVC에 종속적으로 동작하며, 컨트롤러에 집중된 기능을 처리하고 중앙에서 관리합니다."
                        ,   "Filter: Java Servlet 스펙에 정의된 필터 인터페이스를 구현하여 동작하며, 웹 애플리케이션 전체에 영향을 미칩니다."
                        ,   "AOP: 관점 지향 프로그래밍의 개념을 기반으로 동작하며, 애플리케이션 전체의 핵심 비즈니스 로직에 공통 기능을 적용합니다."
                        ].join('\n')}
                    />
                </BsCard>
            </BsContainer>
        </>
    );
};

export default SectionRender;