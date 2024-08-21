import { Helmet } from 'react-helmet-async';
import { Table } from 'react-bootstrap';
import { BsJournalText } from 'react-icons/bs';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
import { DlList, DtItem, DdItem } from 'components/List';
import Note from 'components/Note';
import Highlight from 'components/ExtHighlight'; // SyntaxHighlighter
/**
 * AOP.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 8/20/24
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    const
        title = "AOP(Aspect Oriented Programming)",
        breadcrumbs = [ "Learn", "Spring", "AOP" ];

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
                    col={ 6 }
                    title="관점지향프로그래밍"
                    subtitle="AOP, Aspect Oriented Programming"
                    image={{
                        variant : 'top'
                    ,   src : '/assets/img/spring/aop.png'
                    }}
                >
                    <BsCardText>
                        <span className="text-danger">AOP(Aspect Oriented Programming)는 관점 지향 프로그래밍</span>입니다.
                        AOP는 관점을 기준으로 묶어 개발하는 방식을 의미합니다.
                        <br />
                        여기서 관점이란 어떤 기능을 구현할 때 그 기능을 "핵심 기능(Core Concerns)"과 "부가 기능(Cross-cutting Concerns)"으로
                        구분해 각각 하나의 관점으로 보는 것을 의미합니다.
                    </BsCardText>

                    <BsCardText>
                        Class A, Class B, Class C의 기능을 핵심 기능으로 정의하였고, Logging, Security, Transaction의
                        공통적인 기능을 부가 기능으로 정의 합니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="조인포인트"
                    subtitle="Join Point"
                >
                    <ul>
                        <li>애플리케이션의 실행 흐름에서의 AOP를 적용할 수 있는 모든 특정 지점</li>
                        <li>스프링 AOP가 프록시 방식을 사용하기 때문에 항상 메서드 레벨에서만 적용 가능</li>
                        <li>
                            애플리케이션에 새로운 동작을 추가하기 위해, 이 조인 포인트에 관심코드(Aspect Code) 추가함
                            &rarr; 횡단 관심사(공통 기능)이 조인포인트 전/후에 AOP에 의해 자동으로 추가됨
                        </li>
                        <li>어드바이스 적용이 필요한 곳은 애플리케이션 내에 메서드를 가짐</li>
                        <li>JointPoint 메소드는 기본적으로 어드바이스 메소드에 매개변수로 선언만 하면 됨</li>
                    </ul>

                    <Note
                        title="프록시 방식 ( Proxy )"
                        content={[
                            "타임 중일 때, 스프링 컨테이너가 빈을 생성하면서 요청을 프록시 객체가 대신 가로채서 객체에 넣어주는 것"
                        ]}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="JointPoint 인터페이스 주요 기능"
                    subtitle="Interface"
                >
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>메서드</th>
                                <th>설명</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JoinPoint.getArgs()</td>
                                <td>JoinPoint에 전달된 인자를 배열로 반환</td>
                            </tr>
                            <tr>
                                <td>JoinPoint.getThis()</td>
                                <td>AOP 프록시 객체를 반환</td>
                            </tr>
                            <tr>
                                <td>JoinPoint.getTarget()</td>
                                <td>AOP가 적용된 대상 객체를 반환</td>
                            </tr>
                            <tr>
                                <td>JoinPoint.getSignature()</td>
                                <td>
                                    조언되는 메서드에 대한 설명을 반환
                                    (클라이언트가 호출한 메소드의 시그니처(리턴타입, 이름, 매개변수) 정보가 저장된 Signature
                                    객체를 반환)
                                    <br />
                                    <br />
                                    <BsJournalText /> Signature가 제공하는 메서드
                                    ( 객체가 선언하는 모든 연산에서, 연산의 이름, 매개변수로 받아들이는 객체들을 시그니처라고 함 )
                                    <Table striped bordered hover variant="dark" size="sm">
                                        <thead>
                                            <tr>
                                                <th>메서드</th>
                                                <th>설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>String getName()</td>
                                                <td>클라이언트가 호출한 메소드 이름을 반환</td>
                                            </tr>
                                            <tr>
                                                <td>String toLongString()</td>
                                                <td>클라이언트가 호출한 메소드의 리턴타입, 이름, 매개변수를 패키지 경로까지 포함해서 반환</td>
                                            </tr>
                                            <tr>
                                                <td>String toShortString()</td>
                                                <td> 클라이언트가 호출한 메소드 시그니처를 축약한 문자열로 반환</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                            <tr>
                                <td>JoinPoint.toString()</td>
                                <td>조언되는 방법에 대한 유용한 설명을 인쇄</td>
                            </tr>
                        </tbody>
                    </Table>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="ProceedingJoinPoint 인터페이스 주요 기능"
                    subtitle="Interface"
                >
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                <th>메서드</th>
                                <th>설명</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>proceed()</td>
                                <td>다음 어드바이스나 타켓을 호출</td>
                            </tr>
                        </tbody>
                    </Table>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="타겟"
                    subtitle="Target"
                >
                    <ul>
                        <li>핵심 기능을 담고있는 모듈(부가기능(Advice)이 적용될 객체)</li>
                        <li>포인트컷(Pointcut)으로 어느 Target에 들어갈지 결정됨(위치 선별 기능으로 결정)</li>
                    </ul>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="어드바이스"
                    subtitle="Advice"
                >
                    <ul>
                        <li>특정 조인포인트(Join Point)에서 수행될 부가기능을 정리한 코드</li>
                        <li>핵심 기능(Target)에 Aspect를 언제 적용할지(Aspect 적용 시점) 정의 &rarr; (Ex. 메서드 실행 전/후)</li>
                        <li>시스템 전체 Aspect에 API 호출 제공</li>
                        <li>순서를 보장하지 않음
                            <ul>
                                <li>
                                    순서를 지정하려면 <code>@Aspect</code> 적용 단위로
                                    <code>org.springframework.core.annotation.@Order</code> 어노테이션을 적용해야함
                                </li>
                                <li>어드바이스(Advice) 단위가 아닌 클래스 단위로 적용 가능</li>
                                <li>
                                    하나의 애스팩트(Aspect)에 여러 어드바이스(Advice)가 존재한다면 순서 보장하지 않음
                                    &rarr; 애스팩트(Aspect)를 클래스별로 분리해야함
                                </li>
                            </ul>
                        </li>
                    </ul>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="어드바이스(Advice) 종류"
                    subtitle="@Before"
                >
                    <ul>
                        <li>조인포인트 이전에 실행</li>
                        <li>Target 메서드(핵심 기능)가 실행되기 전에 처리해야할 필요가 있는 부가 기능을 메서드 호출 전에 실행</li>
                        <li>
                            <code>Before</code> Advice로 구현한 메서드는 일반적으로 리턴 타입이 void
                            (그러나, 리턴 값을 갖더라도 실제 Advice 적용 과정에는 영향 없음)
                        </li>
                        <li>작업 흐름 변경 불가</li>
                        <li>
                            메서드 종료 시, 자동으로 다음 타겟 호출
                            (주의점 : 메서드에서 예외를 발생시킬 경우, 대상 객체의 메서드 호출 안됨)
                        </li>
                    </ul>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="어드바이스(Advice) 종류"
                    subtitle="@AfterReturing"
                >
                    <ul>
                        <li>
                            조인포인트가 정상 완료된 후 실행
                            (메서드 실행이 예외없이 정상적으로 반환된 이후 공통 기능을 실행)
                        </li>
                        <li>
                            &lt;returning 속성에 사용된 이름 == 어드바이스 메서드의 매개변수 이름&gt; 이어야함
                        </li>
                        <li>
                            returning 절에 지정된 타입의 값을 반환하는 메서드만 대상을 실행
                        </li>
                    </ul>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="어드바이스(Advice) 종류"
                    subtitle="@AfterThrowing"
                >
                    <ul>
                        <li>
                            메서드 실행이 예외를 던져 종료될 경우에 실행
                            (메서드를 실행하는 도중 예외가 발생한 경우 공통 기능을 실행)
                        </li>
                        <li>
                            &lt;throwing 속성에 사용된 이름 == 어드바이스 메서드의 매개변수 이름&gt; 이어야함
                        </li>
                        <li>
                            throwing 절에 지정된 타입과 맞은 예외를 대상으로 실행
                        </li>
                    </ul>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="어드바이스(Advice) 종류"
                    subtitle="@After (finally)"
                >
                    <ul>
                        <li>
                            조인 포인트의 동작과는 상관없이 메서드 실행 후 공통 기능 실행
                            (실행 결과가 정상, 예외와는 상관 없음, 예외 동작의 finally 와 비슷한 개념)
                        </li>
                        <li>
                            보통 리소스 해제하는데 사용
                        </li>
                    </ul>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="어드바이스(Advice) 종류"
                    subtitle="@Around"
                >
                    <ul>
                        <li>
                            메서드 호출 전/후, 예외 발생 시점에 공통 기능 실행
                            (Ex. 조인 포인트 실행 여부 선택, 반환 값 변환, 예외 변환 등)
                        </li>
                        <li>
                            가장 강력한 어드바이스
                            <ul>
                                <li>조인 포인트 실행 여부 선택 - <code>joinPoint.proceed()</code></li>
                                <li>전달 값 변환 - <code>joinPoint.proceed(args[])</code></li>
                                <li>반환 값 변환</li>
                                <li>예외 변환</li>
                                <li>try ~ catch ~ finally 가 들어가는 구문 처리 (예외 처리 구문)</li>
                            </ul>
                        </li>
                        <li>
                            어드바이스의 첫 번째 파라미터는 <code>ProceedingJoinPoint</code> 사용해야함
                        </li>
                        <li>
                            <code>proceed()</code> 를 통해 대상 실행하고 여러번 실행 가능
                        </li>
                    </ul>

                    <Note title="Tip">
                        <p>
                            사실 <code>@Around</code>만 있어도 모든 기능 수행 가능하지만, 고려해야할 사항이 있을 때,
                            정상적으로 작동이 되지 않는 경우가 있습니다.
                            <br />
                            <code>@Before</code> / <code>@After</code> 과 같은 어드바이스는 기능은 적지만 코드도 단순하고,
                            원하는 대로 작동하며 각각이 어노테이션만 봐도 어떤 일을 하는지 명확하게 파악 가능합니다.
                            <br />
                            좋은 설계는 <code>@Around</code>만 사용하는 것보다 제약을 가지더라도 문제 자체가 발생하지
                            않도록 역할을 명확하게 하여 실수를 사전에 방지하는 것입니다.
                        </p>
                    </Note>

                </BsCard>

                <BsCard
                    col={ 6 }
                    title="포인트컷"
                    subtitle="Pointcut"
                >
                    <ul>
                        <li>
                            조인포인트(Join Point)에서 어드바이스(Advice)가 적용될 위치를 선별하는 기능
                            ( 애플리케이션 실행 흐름에서 AOP를 적용할 수 있는 모든 포인트에서 수행될 부가기능 코드의 위치를 선별하는 기능 )
                        </li>
                        <li>
                            관심 조인포인트를 결정(어드바이스가 실행되는 시기 제어 가능)
                        </li>
                        <li>
                            메서드 실행 지점만 포인트컷으로 선별 가능
                        </li>
                        <li>
                            AspectJ 표현식을 사용해서 지정(&& / || / ! 를 사용하여 결합 가능)
                        </li>
                    </ul>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="포인트컷 지시자 종류"
                >
                    <DlList>
                        <DtItem>execution</DtItem>
                        <DdItem>
                            메서드 실행 조인트 포인트 매칭(스프링 AOP에서 가장 많이 사용하며 기능도 복잡합니다.)
                        </DdItem>
                        <DtItem>within</DtItem>
                        <DdItem>
                            특정 타입 내의 조인 포인트 매칭
                        </DdItem>
                        <DtItem>args</DtItem>
                        <DdItem>
                            인자가 주어진 타입의 인스턴스인 조인 포인트
                        </DdItem>
                        <DtItem>this</DtItem>
                        <DdItem>
                            스프링 빈 객체(스프링 AOP 프록시)를 대상으로 하는 조인 포인트
                        </DdItem>
                        <DtItem>target</DtItem>
                        <DdItem>
                            타겟 객체(스프링 AOP 프록시가 가르키는 실제 대상)를 대상으로 하는 조인 포인트
                        </DdItem>
                        <DtItem>@target</DtItem>
                        <DdItem>
                            실행 객체의 클래스에 주어진 타입의 어노테이션이 있는 조인 포인트
                        </DdItem>
                        <DtItem>@within</DtItem>
                        <DdItem>
                            주어진 어노테이션이 있는 타입 내 조인 포인트
                        </DdItem>
                        <DtItem>@annotation</DtItem>
                        <DdItem>
                            메서드가 주어진 어노테이션을 가지고 있는 조인 포인트를 매칭
                        </DdItem>
                        <DtItem>@args</DtItem>
                        <DdItem>
                            전달된 실제 인수의 런타임 타입이 주어진 타입의 어노테이션을 갖는 조인 포인트
                        </DdItem>
                        <DtItem>@bean</DtItem>
                        <DdItem>
                            스프링 전용 포인트컷 지시자(빈의 이름으로 포인트컷을 지정)
                        </DdItem>
                    </DlList>

                    <Note
                        title="Tip"
                        content={["execution을 가장 많이 사용하고 나머지는 자주 사용하지 않음 !"]}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="포인트컷 표현식"
                >
                    <Highlight
                        language="java"
                        codestring={["@Pointcut(execution([접근제어자] 반환 타입 [패키지/클래스.] 메서드명 (파라미터 타입|\"..\",...) [throws 예외]"]}
                    />

                    <ul>
                        <li>대괄호(<code>[]</code>)로 표시되어 있는 부분은 생략 가능</li>
                        <li>각 패턴은 <code>*</code> 기호를 사용하여 모든 값을 표현하는 것이 가능</li>
                        <li>점 두개 (<code>..</code>)를 사용하여 0개 이상의 수 표현 가능</li>
                    </ul>

                    <Highlight
                        header="Example"
                        language="java"
                        codestring={[
                            "(..) // 모든 매개변수"
                        ,   "*(..) // 모든 메서드 선택"
                        ,   "(*) // 반드시 1개의 매개변수를 가지는 메소드만 선택"
                        ,   ""
                        ,   "execution(public * *(..)) // 모든 공개 메서드 실행"
                        ,   "execution(* set*(..)) // set 다음 이름으로 시작하는 모든 메서드 실행(메서드명이 set~으로 시작하는 모든 메서드)"
                        ,   "execution(* com.xyz.service.AccountService.*(..)) // AccountService 인터페이스에 의해 정의된 모든 메소드의 실행(파일 위치가 com.xyz.service 패키지의 AccountService 인)"
                        ,   "execution(* com.xyz.service.*.*(..)) // service 패키지에 정의된 메서드 실행(파일 위치가 com.xyz.service 패키지)"
                        ,   "execution(* com.xyz.service..*.*(..)) // service 패키지 또는 해당 하위 패키지 중 하나에 정의된 메서드 실행"
                        ,   "within(com.xyz.service.*) // service 패키지 내의 모든 조인 포인트(Spring AOP에서만 메서드 실행)"
                        ,   "within(com.xyz.service..*) // service 패키지 또는 하위 패키지 중 하나 내의 모든 조인 포인트(Spring AOP에서만 메서드 실행)"
                        ,   "this(com.xyz.service.AccountService) // AccountService 프록시가 인터페이스를 구현하는 모든 조인 포인트(Spring AOP에서만 메서드 실행)"
                        ,   "target(com.xyz.service.AccountService) // AccountService 대상 객체가 인터페이스를 구현하는 모든 조인 포인트(Spring AOP에서만 메서드 실행)"
                        ,   "args(java.io.Serializable) // 단일 매개변수를 사용하고 런타임에 전달된 인수가 Serializable과 같은 모든 조인 포인트(Spring AOP에서만 메소드 실행)"
                        ,   "@target(org.springframework.transaction.annotation.Transactional) // 대상 객체에 @Transactional 어노테이션이 있는 모든 조인 포인트(Spring AOP에서만 메서드 실행)"
                        ,   "@annotation(org.springframework.transaction.annotation.Transactional) // 실행 메서드에 @Transactional 어노테이션이 있는 조인 포인트(Spring AOP에서만 메서드 실행)"
                        ,   "@args(com.xyz.security.Classified) // 단일 매개 변수를 사용하고 전달된 인수의 런타임 유형이 @Classified 어노테이션을 갖는 조인 포인트(Spring AOP에서만 메서드 실행)"
                        ,   "bean(memberService) // memberService 라는 이름의 스프링 빈의 모든 조인 포인트(Spring AOP에서만 메서드 실행)"
                        ,   "bean(*Service) // 와일드 표현식 *Service 라는 이름을 가진 스프링 빈의 모든 조인 포인트(~Service로 끝나는 이름의 bean)"
                        ].join('\n')}
                    />
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="위빙"
                    subtitle="Weaving"
                >
                    <BsCardText>
                        포인트컷(Pointcut)으로 결정한 핵심 기능(Target)의 조인포인트(Join Point)에 어드바이스(Advice)를 적용하는 것입니다.
                        다시말하면, 위치 선별 기능으로 결정한 핵심 기능의 AOP 적용 가능 포인트에 부가기능 코드를 적용하는 것입니다.
                    </BsCardText>
                </BsCard>

                <BsCard
                    col={ 12 }
                    title="프록시 방식을 통해서 AOP가 구현되는 과정"
                >
                    <BsCardText>
                        시점에 따라 컴파일 시, 클래스 로딩 시, 런타임 시 위빙으로 구분 가능하지만 대부분 런타임 시 위빙을 사용합니다.
                        (Spring AOP도 런타임 시 프록시 객체를 생성하여 공통 기능을 삽입하는 방법을 사용하고 있습니다.)
                    </BsCardText>

                    <DlList>
                        <DtItem>컴파일 타임</DtItem>
                        <DdItem>
                            <code>.java</code> 파일 &rarr; <code>.class</code> 파일로 컴파일되는 시점에 Aspect가 삽입됨
                            (Spring AOP에서는 사용 불가 / AspectJ 사용할 때 사용)
                        </DdItem>
                        <DtItem>클래스 로드 타임</DtItem>
                        <DdItem>
                            컴파일 이후에 메모리에 올라가는 시점에 AOP가 적용
                            (스프링 AOP에서는 사용 불가 / AspectJ 사용할 때 사용)
                        </DdItem>
                        <DtItem>런타임(실행중일 때) $rarr; Spring AOP (프록시 방식)</DtItem>
                        <DdItem>
                            IoC를 통해서 스프링 컨테이너가 객체를 생성할 때 프록시 객체를 자동으로 생성하고 원본 객체 대신 프록시 빈으로 등록
                            <br />
                            스프링 컨테이너가 빈을 생성할 때 이 요청을 프록시 객체가 가로채서 <code>@Aspect</code> 가 되어있는
                            객체들을 모아서 객체에 넣어줌
                        </DdItem>
                    </DlList>
                </BsCard>

                <BsCard
                    col={ 6 }
                    title="어드바이저"
                    subtitle="Advisor"
                >
                    <ul>
                        <li>
                            하나의 어드바이스(Advice) + 하나의 포인트컷(Pointcut) 으로 구성
                            (수행 코드(부가기능) + 그 코드의 위치 선별 기능)
                        </li>
                        <li>스프링 AOP에서만 사용되는 특별한 용어</li>
                    </ul>
                </BsCard>
            </BsContainer>
        </>
    );
}
 
export default SectionRender;