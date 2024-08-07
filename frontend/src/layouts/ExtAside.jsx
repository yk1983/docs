import { Link } from 'react-router-dom';
import {
    BsGrid,
    BsFiletypeJava,
    BsFiletypeJsx,
    BsFiletypeJs,
    BsDownload,
    BsListColumnsReverse,
    BsQuestionCircle,
    BsEnvelope,
    BsBoxes,
    BsBox,
    BsCircle
} from 'react-icons/bs';

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
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/">
                            <BsGrid
                                className="icon"
                            />
                            <span>Dashboard</span>
                        </Link>
                    </li>{/* End Dashboard Nav */}

                    <li className="nav-heading">HTML</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-htmlref-nav" data-bs-toggle="collapse" to="#">
                            <BsListColumnsReverse
                                className="icon"
                            />
                            <span>References</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-htmlref-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/html/ref-tags">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>Tag List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/html/ref-standardattributes">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>Global Attributes</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/html/ref-eventattributes">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>Events</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End HTML References Nav */}

                    <li className="nav-heading">CSS</li>

                    <li className="nav-heading">JavaScript</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/javascript/intro">
                            <BsFiletypeJs
                                className="icon"
                            />
                            <span>소개(Introduction)</span>
                        </Link>
                    </li>{/* End React Introduction Page Nav */}

                    <li className="nav-heading">jQuery</li>

                    <li className="nav-heading">리액트(React)</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/react/intro">
                            <BsFiletypeJsx
                                className="icon"
                            />
                            <span>소개(Introduction)</span>
                        </Link>
                    </li>{/* End React Introduction Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-react-nav" data-bs-toggle="collapse" to="#">
                            <BsDownload
                                className="icon"
                            />
                            <span>Getting Started</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-react-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/react/getstarted">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>Create App</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/adding-typescript">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>Adding TypeScript</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/adding-bootstrap">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>Adding Bootstrap</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/adding-router">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>Adding Router</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End React Getting Started Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/react/component">
                            <BsBox
                                className="icon"
                            />
                            <span>컴포넌트(Component)</span>
                        </Link>
                    </li>{/* End React Component Page Nav */}

                    <li className="nav-heading">자바(Java)</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/java/intro">
                            <BsFiletypeJava
                                className="icon"
                            />
                            <span>소개(Introduction)</span>
                        </Link>
                    </li>{/* End React Introduction Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-datatype" data-bs-toggle="collapse" to="#">
                            <BsBoxes
                                className="icon"
                            />
                            <span>자료형(Data Types)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-datatype" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/datatype">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>자료형(Data Types)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/integer">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>정수형(Integer)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/floating">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>실수형(Floating-Point)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/characters">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>문자형(Characters)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/boolean">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>논리형(Boolean)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/casting">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>형변환(Casting)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java DataType Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-statements" data-bs-toggle="collapse" to="#">
                            <BsBoxes
                                className="icon"
                            />
                            <span>제어문(Statements)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-statements" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/conditional">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>조건문(Conditional)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/iteration">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>반복문(Iteration)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/control-flow">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>기타</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java Statements Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-oop" data-bs-toggle="collapse" to="#">
                            <BsBoxes
                                className="icon"
                            />
                            <span>객체지향프로그래밍(OOP)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-oop" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/oop">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>객체지향프로그래밍(OOP)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/classes">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>클래스(Class)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/constructor">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>생성자(Constructor)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/constructor-this">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>this와 this()</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/method">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>메서드(Method)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/overloading">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>오버로딩(Overloading)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java OOP Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-inheritance" data-bs-toggle="collapse" to="#">
                            <BsBoxes
                                className="icon"
                            />
                            <span>상속(Inheritance)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-inheritance" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/inheritance">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>상속(Inheritance)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/overriding">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>오버라이딩(Overriding)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/inheritance-super">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>super와 super()</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java Inheritance Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-polymorphism" data-bs-toggle="collapse" to="#">
                            <BsBoxes
                                className="icon"
                            />
                            <span>다형성(Polymorphism)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-polymorphism" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/polymorphism">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>다형성(Polymorphism)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/overriding">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>오버라이딩(Overriding)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/inheritance-super">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>super와 super()</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java Polymorphism Nav */}

                    <li className="nav-heading">SQL</li>

                    <li className="nav-heading">Spring</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/spring/intro">
                            <BsFiletypeJava
                                className="icon"
                            />
                            <span>소개(Introduction)</span>
                        </Link>
                    </li>{/* End Spring Introduction Page Nav */}

                    <li className="nav-heading">BPMN</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/bpmn/intro">
                            <BsFiletypeJava
                                className="icon"
                            />
                            <span>소개(Introduction)</span>
                        </Link>
                    </li>{/* End BPMN Introduction Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-bpmn-nav" data-bs-toggle="collapse" to="#">
                            <BsListColumnsReverse
                                className="icon"
                            />
                            <span>BPMN 요소</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-bpmn-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/bpmn/event">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>이벤트(Event)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/activitie">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>활동(Activities)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/geteway">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>게이트웨이(Geteways)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/data-object">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>데이터 객체(Data Objects)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/flow">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>흐름(Flow)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/artifact">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>아티팩트(Artifact)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bpmn/swimlane">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>스윔레인(Swimlane)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End HTML References Nav */}

                    <li className="nav-heading">Pages</li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/faq">
                            <BsQuestionCircle
                                className="icon"
                            />
                            <span>F.A.Q</span>
                        </Link>
                    </li>{/* End F.A.Q Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/contact">
                            <BsEnvelope
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