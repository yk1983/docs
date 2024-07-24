import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
    const [isSideBar, setSideBar] = useState(false); // 메뉴의 초기값을 false로 설정
    const [isSearch, setSearch] = useState(false);
    const inputSearch = useRef();
    useEffect(() => {
        document.body.classList.toggle('toggle-sidebar');
    }, [isSideBar]);

    useEffect(() => {
        inputSearch.current.classList.toggle('search-bar-show');
    }, [isSearch]);

    return(
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} alt="" />
                        <span className="d-none d-lg-block">DocsAdmin</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={() => setSideBar(!isSideBar)}></i>
                </div>{/* End Logo */}

                <div className="search-bar" ref={ inputSearch }>
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <Button type="submit" title="Search">
                            <i className="bi bi-search"></i>
                        </Button>
                    </form>
                </div>{/* End Search Bar */}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item d-block d-lg-none">
                            <Link className="nav-link nav-icon search-bar-toggle " to="#">
                                <i className="bi bi-search" onClick={() => setSearch(!isSearch)}></i>
                            </Link>
                        </li>{/* End Search Icon */}

                        <li className="nav-item dropdown">

                            <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                                <i className="bi bi-bell"></i>
                                <span className="badge bg-primary badge-number">4</span>
                            </Link>{/* End Notification Icon */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have 4 new notifications
                                    <Link to="#">
                                        <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-x-circle text-danger"></i>
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-check-circle text-success"></i>
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-info-circle text-primary"></i>
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="dropdown-footer">
                                    <Link to="#">Show all notifications</Link>
                                </li>
                            </ul>{/* End Notification Dropdown Items */}

                        </li>{/* End Notification Nav */}

                        <li className="nav-item dropdown">

                            <Link className="nav-link nav-icon" to="#" data-bs-toggle="dropdown">
                                <i className="bi bi-chat-left-text"></i>
                                <span className="badge bg-success badge-number">3</span>
                            </Link>{/* End Messages Icon */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                <li className="dropdown-header">
                                    You have 3 new messages
                                    <Link to="#">
                                        <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="message-item">
                                    <Link to="#">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/messages-1.jpg'} alt="" className="rounded-circle" />
                                        <div>
                                            <h4>Maria Hudson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="message-item">
                                    <Link to="#">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/messages-2.jpg'} alt="" className="rounded-circle" />
                                        <div>
                                            <h4>Anna Nelson</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>6 hrs. ago</p>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="message-item">
                                    <Link to="#">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/messages-3.jpg'} alt="" className="rounded-circle" />
                                        <div>
                                            <h4>David Muldon</h4>
                                            <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                            <p>8 hrs. ago</p>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="dropdown-footer">
                                    <Link to="#">Show all messages</Link>
                                </li>
                            </ul>{/* End Messages Dropdown Items */}
                        </li>{/* End Messages Nav */}

                        <li className="nav-item dropdown pe-3">
                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
                                <img src={process.env.PUBLIC_URL + '/assets/img/profile-img.png'} alt="Profile"
                                className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">Yong Kim</span>
                            </Link>{/* End Profile Iamge Icon */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Yong Kim</h6>
                                    <span>Svcs Del. Specialist</span>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="users-profile.html">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="users-profile.html">
                                        <i className="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="pages-faq.html">
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </Link>
                                </li>
                            </ul>{/* End Profile Dropdown Items */}
                        </li>{/* End Profile Nav */}
                    </ul>
                </nav>{/* End Icons Navigation */}
            </header>{/* End Header */}
        </>
    );
}

export default Header;