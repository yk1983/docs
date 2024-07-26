import { Link } from 'react-router-dom';

const Aside = () => {
    return(
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>{/* End Dashboard Nav */}

                    <li className="nav-heading">HTML</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-htmlref-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-list-columns-reverse"></i>
                            <span>References</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-htmlref-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/html/ref-tags">
                                    <i className="bi bi-circle"></i>
                                    <span>Tag List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/html/ref-standardattributes">
                                    <i className="bi bi-circle"></i>
                                    <span>Global Attributes</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/html/ref-eventattributes">
                                    <i className="bi bi-circle"></i>
                                    <span>Events</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End HTML References Nav */}

                    <li className="nav-heading">CSS</li>

                    <li className="nav-heading">JavaScript</li>

                    <li className="nav-heading">자바(Java)</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/java/intro">
                            <i className="bi bi-signpost"></i>
                            <span>소개(Introduction)</span>
                        </Link>
                    </li>{/* End React Introduction Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-java-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-braces"></i>
                            <span>자료형(Data Types)</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-java-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/java/datatype">
                                    <i className="bi bi-circle"></i>
                                    <span>자료형(Data Types)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/integer">
                                    <i className="bi bi-circle"></i>
                                    <span>정수형(Integer)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/floating">
                                    <i className="bi bi-circle"></i>
                                    <span>실수형(Floating-Point)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/characters">
                                    <i className="bi bi-circle"></i>
                                    <span>문자형(Characters)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/boolean">
                                    <i className="bi bi-circle"></i>
                                    <span>논리형(Boolean)</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/java/casting">
                                    <i className="bi bi-circle"></i>
                                    <span>형변환(Casting)</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Java Nav */}

                    <li className="nav-heading">리액트(React)</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/react/intro">
                            <i className="bi bi-signpost"></i>
                            <span>소개(Introduction)</span>
                        </Link>
                    </li>{/* End React Introduction Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#learn-react-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-download"></i>
                            <span>Getting Started</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="learn-react-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/react/getstarted">
                                    <i className="bi bi-circle"></i>
                                    <span>Create App</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/adding-typescript">
                                    <i className="bi bi-circle"></i>
                                    <span>Adding TypeScript</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/adding-bootstrap">
                                    <i className="bi bi-circle"></i>
                                    <span>Adding Bootstrap</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/react/adding-router">
                                    <i className="bi bi-circle"></i>
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
                            <i className="bi bi-question-circle"></i>
                            <span>F.A.Q</span>
                        </Link>
                    </li>{/* End F.A.Q Page Nav */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/contact">
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li>{/* End Contact Page Nav */}
                </ul>
            </aside>{/* End Sidebar*/}
        </>
    );
}

export default Aside;