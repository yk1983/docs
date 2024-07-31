import { Link } from 'react-router-dom';
import {
    BsGrid,
    BsFiletypeCss,
    BsFiletypeJava,
    BsFiletypeJsx,
    BsFiletypeJs,
    BsDownload,
    BsListColumnsReverse,
    BsQuestionCircle,
    BsEnvelope,
    BsBoxes, BsBox,
    BsCircle
} from 'react-icons/bs';

const Aside = () => {
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
                                <Link to="/java/method">
                                    <BsCircle
                                        className="icon"
                                    />
                                    <span>메서드(Method)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java OOP Nav */}

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

                    <li className="nav-heading">SQL</li>

                    <li className="nav-heading">Spring</li>

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
}

export default Aside;