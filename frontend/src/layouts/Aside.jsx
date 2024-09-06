import { Link } from 'react-router-dom';
import {
    BiGridAlt,
    BiLogoHtml5, /* BiLogoCss3, */ BiLogoJava, BiLogoSpringBoot, BiLogoJavascript, /* BiLogoJquery ,*/ BiLogoReact, BiLogoPostgresql,
    BiQuestionMark, BiEnvelope,
    BiCircle
} from "react-icons/bi";
import { FcWorkflow } from "react-icons/fc";

const LiCreator = (text, link, liChildren) => {
    return (
        <li>
            <a href={ link }>
                { text }
            </a>
            { liChildren }
        </li>
    );
};

const UlTreeBuilder = ({ arrObjs, recLink }) => {

    let MenuItems = [];

    // this component will simply create a ul element with children
    const UlParent = ({ UlChildren }) => {
        return (<ul>{ UlChildren }</ul>);
    };

    for (let i = 0; i < arrObjs.length; i++) {
        // if the item has children
        if (arrObjs[i].children) {
            //we then create a ul with children, by self invoking UlTreeBuilder
            let ulWithChildren = <UlTreeBuilder arrObjs={ arrObjs[i].children } recLink={ arrObjs[i].link } />;
            // then we add this created ul into a new li
            let liSingle = LiCreator(arrObjs[i].text, recLink+arrObjs[i].link, ulWithChildren);
            // then we put this li into ul, and push ul into the MenuItems array of the current recursion level
            MenuItems.push(<UlParent UlChildren={ liSingle } />);
        }
        // if the item has no children
        else {
            // we simply create a li with no children
            let liSingle = LiCreator(arrObjs[i].text, arrObjs[i].link);
            // then we put this li into ul, and push ul into the MenuItems array of the current recursion level
            MenuItems.push(<UlParent UlChildren={ liSingle } />);
        }
    }

    return(MenuItems);
};

const Aside = ({ arrObjs, recLink }) => {
    return(
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-heading">HOME</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/">
                            <BiGridAlt
                                className="icon"
                            />
                            <span>Dashboard</span>
                        </Link>
                    </li>{/* End Dashboard Nav */}

                    <li className="nav-heading">HTML</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-htmlref-nav" data-bs-toggle="collapse" to="#">
                            <BiLogoHtml5
                                className="icon"
                            />
                            <span>References</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-htmlref-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/html/ref-tags">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>Tag List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/html/ref-standardattributes">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>Global Attributes</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/html/ref-eventattributes">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>Events</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End HTML References Nav */}

                    <li className="nav-heading">CSS</li>

                    <li className="nav-heading">자바스크립트(JavaScript)</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/javascript/intro">
                            <BiLogoJavascript
                                className="icon"
                            />
                            <span>자바스크립트(JS)</span>
                        </Link>
                    </li>{/* End JavaScript Introduction Page Nav */}

                    <li className="nav-heading">제이쿼리(jQuery)</li>

                    <li className="nav-heading">리액트(React)</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/react/intro">
                            <BiLogoReact
                                className="icon"
                            />
                            <span>리액트(React)</span>
                        </Link>
                    </li>{/* End React Introduction Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-react-nav" data-bs-toggle="collapse" to="#">
                            <BiLogoReact className="icon" />
                            <span>Getting Started</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-react-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/react/getstarted">
                                    <BiCircle className="icon" />
                                    <span>Create App</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/adding-typescript">
                                    <BiCircle className="icon" />
                                    <span>Adding TypeScript</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/adding-bootstrap">
                                    <BiCircle className="icon" />
                                    <span>Adding Bootstrap</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/adding-router">
                                    <BiCircle className="icon" />
                                    <span>Adding Router</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End React Getting Started Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/react/component">
                            <BiLogoReact
                                className="icon"
                            />
                            <span>컴포넌트(Component)</span>
                        </Link>
                    </li>{/* End React Component Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-react-hook" data-bs-toggle="collapse" to="#">
                            <BiLogoReact className="icon" />
                            <span>훅(Hook)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-react-hook" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/react/hook">
                                    <BiCircle className="icon" />
                                    <span>훅(Hook)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/useState">
                                    <BiCircle className="icon" />
                                    <span>useState</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/useEffect">
                                    <BiCircle className="icon" />
                                    <span>useEffect</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/useRef">
                                    <BiCircle className="icon" />
                                    <span>useRef</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/useCallback">
                                    <BiCircle className="icon" />
                                    <span>useCallback</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/useMemo">
                                    <BiCircle className="icon" />
                                    <span>useMemo</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/useLayoutEffect">
                                    <BiCircle className="icon" />
                                    <span>useLayoutEffect</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End React Getting Started Page Nav */}

                    <li className="nav-heading">자바(Java)</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/java/intro">
                            <BiLogoJava className="icon" />
                            <span>자바(Java)</span>
                        </Link>
                    </li>{/* End Java Introduction Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-datatype" data-bs-toggle="collapse" to="#">
                            <BiLogoJava
                                className="icon"
                            />
                            <span>자료형(Data Types)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-datatype" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/datatype">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>자료형(Data Types)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/integer">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>정수형(Integer)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/floating">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>실수형(Floating-Point)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/characters">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>문자형(Characters)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/boolean">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>논리형(Boolean)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/casting">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>형변환(Casting)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java DataType Nav */}

                    <Link className="nav-link collapsed" data-bs-target="#learn-java-arrays" data-bs-toggle="collapse" to="#">
                        <BiLogoJava
                            className="icon"
                        />
                        <span>배열(Arrays)</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </Link>
                    <ul id="learn-java-arrays" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="/java/arrays">
                                <BiCircle
                                    className="icon"
                                />
                                <span>배열(Arrays)</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/java/multi-dimensional-arrays">
                                <BiCircle
                                    className="icon"
                                />
                                <span>다차원배열(Multi-Dimensional)</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/java/arrays-conjugation">
                                <BiCircle
                                    className="icon"
                                />
                                <span>활용(Conjugation)</span>
                            </Link>
                        </li>
                    </ul>{/* End Java Array Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-statements" data-bs-toggle="collapse" to="#">
                            <BiLogoJava
                                className="icon"
                            />
                            <span>제어문(Statements)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-statements" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/conditional">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>조건문(Conditional)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/iteration">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>반복문(Iteration)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/control-flow">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>기타</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java Statements Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-oop" data-bs-toggle="collapse" to="#">
                            <BiLogoJava
                                className="icon"
                            />
                            <span>객체지향프로그래밍(OOP)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-oop" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/oop">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>객체지향프로그래밍(OOP)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/classes">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>클래스(Class)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/constructor">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>생성자(Constructor)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/constructor-this">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>this와 this()</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/method">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>메서드(Method)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/overloading">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>오버로딩(Overloading)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java OOP Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-inheritance" data-bs-toggle="collapse" to="#">
                            <BiLogoJava
                                className="icon"
                            />
                            <span>상속(Inheritance)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-inheritance" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/inheritance">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>상속(Inheritance)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/overriding">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>오버라이딩(Overriding)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/inheritance-super">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>super와 super()</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java Inheritance Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-polymorphism" data-bs-toggle="collapse" to="#">
                            <BiLogoJava
                                className="icon"
                            />
                            <span>다형성(Polymorphism)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-polymorphism" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/polymorphism">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>다형성(Polymorphism)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/overriding">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>오버라이딩(Overriding)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/abstract">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>추상화(Abstract)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/interface">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>인터페이스(Interface)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/inner-class">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>내부클래스(Inner Class)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java Polymorphism Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/java/generics">
                            <BiLogoJava className="icon" />
                            <span>제네릭(Generics)</span>
                        </Link>
                    </li>{/* End Java Generics Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-collection" data-bs-toggle="collapse" to="#">
                            <BiLogoJava
                                className="icon"
                            />
                            <span>컬렉션(Collection)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-collection" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/collection">
                                    <BiCircle className="icon" />
                                    <span>컬렉션 프레임워크</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/overriding">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>오버라이딩(Overriding)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/abstract">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>추상화(Abstract)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/interface">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>인터페이스(Interface)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/inner-class">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>내부클래스(Inner Class)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java Polymorphism Nav */}

                    <li className="nav-heading">SQL</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/sql/oracle-on-macos">
                            <BiLogoPostgresql
                                className="icon"
                            />
                            <span>[MacOS]오라클 설치</span>
                        </Link>
                    </li>{/* End SQL JOIN Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-sql-dml" data-bs-toggle="collapse" to="#">
                            <BiLogoPostgresql
                                className="icon"
                            />
                            <span>데이터 조작어(DML)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-sql-dml" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/sql/insert">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>삽입(INSERT)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/sql/update">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>수정(UPDATE)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/sql/delete">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>삭제(DELETE)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/sql/select">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>검색(SELECT)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/sql/merge">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>MERGE문</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java Polymorphism Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/sql/join">
                            <BiLogoPostgresql className="icon" />
                            <span>조인(JOIN)</span>
                        </Link>
                    </li>{/* End SQL JOIN Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/sql/union">
                            <BiLogoPostgresql className="icon" />
                            <span>결합(UNION)</span>
                        </Link>
                    </li>{/* End SQL UNION Page Nav */}

                    <li className="nav-heading">스프링(Spring)</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-spring" data-bs-toggle="collapse" to="#">
                            <BiLogoSpringBoot className="icon" />
                            <span>스프링(Spring)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-spring" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/spring/intro">
                                    <BiCircle className="icon" />
                                    <span>스프링(Spring)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/spring/dependency-injection">
                                    <BiCircle className="icon" />
                                    <span>의존성 주입(DI)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/spring/inversion-of-control">
                                    <BiCircle className="icon" />
                                    <span>제어의 역전(IoC)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Spring Introduction Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/spring/aspect-oriented-programming">
                            <BiLogoSpringBoot className="icon" />
                            <span>AOP(관점지향프로그래밍)</span>
                        </Link>
                    </li>{/* End Spring AOP Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/spring/java-persistence-api">
                            <BiLogoSpringBoot className="icon" />
                            <span>JPA & Mybatis</span>
                        </Link>
                    </li>{/* End Spring JPA Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/spring/interceptor">
                            <BiLogoSpringBoot className="icon" />
                            <span>인터셉터(Interceptor)</span>
                        </Link>
                    </li>{/* End Spring Interceptor Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/spring/resolver">
                            <BiLogoSpringBoot className="icon" />
                            <span>리졸버(Resolver)</span>
                        </Link>
                    </li>{/* End Spring Resolver Page Nav */}

                    <li className="nav-heading">비지니스 프로세스 모델링 표기법(BPMN)</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/bpmn/intro">
                            <FcWorkflow
                                className="icon"
                            />
                            <span>BPMN</span>
                        </Link>
                    </li>{/* End BPMN Introduction Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-bpmn-nav" data-bs-toggle="collapse" to="#">
                            <FcWorkflow
                                className="icon"
                            />
                            <span>BPMN 요소</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-bpmn-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/bpmn/event">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>이벤트(Event)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/activitie">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>활동(Activities)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/gateway">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>게이트웨이(Geteways)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/data-object">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>데이터 객체(Data Objects)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/flow">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>흐름(Flow)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/artifact">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>아티팩트(Artifact)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/swimlane">
                                    <BiCircle
                                        className="icon"
                                    />
                                    <span>스윔레인(Swimlane)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End HTML References Nav */}

                    <li className="nav-heading">Community</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/faq">
                            <BiQuestionMark
                                className="icon"
                            />
                            <span>F.A.Q</span>
                        </Link>
                    </li>{/* End F.A.Q Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/contact">
                            <BiEnvelope
                                className="icon"
                            />
                            <span>Contact</span>
                        </Link>
                    </li>{/* End Contact Page Nav */}
                </ul>
            </aside>{/* End Sidebar*/}
        </>
    );
};

export default Aside;