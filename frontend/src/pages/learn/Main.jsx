import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, Table } from 'react-bootstrap';
import Breadcrumbs from 'components/Breadcrumbs';
import { BsContainer, BsCard, BsCardText } from 'components/Article';
// JsonData
import data from 'data/News';
/**
 * Dashboard.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 8/20/24
 * @param   :
 * @version : 1.0.0
 */
const SectionRender = () => {
    return (
        <>
            <section className="section dashboard">
                <Card className="card">
                    <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                                <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" href="#">Today</a></li>
                            <li><a className="dropdown-item" href="#">This Month</a></li>
                            <li><a className="dropdown-item" href="#">This Year</a></li>
                        </ul>
                    </div>

                    <Card.Body className="card-body pb-0">
                        <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>

                        <div className="news">
                        {data.map((item, index) => (
                            <div className="post-item clearfix" key={ index }>
                                { (item.src) && <img src={ process.env.PUBLIC_URL + "/assets/img/news-1.jpg" } alt="" /> }
                                <h4>
                                    <Link to="#">{ item.header }</Link>
                                </h4>
                                <p>{ item.content }</p>
                            </div>
                        ))}
                            {/*<div className="post-item clearfix">
                                <img src={ process.env.PUBLIC_URL + "/assets/img/news-1.jpg" } alt="" />
                                <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                                <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                            </div>

                            <div className="post-item clearfix">
                                <img src={ process.env.PUBLIC_URL + "/assets/img/news-2.jpg" } alt="" />
                                <h4><a href="#">Quidem autem et impedit</a></h4>
                                <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...
                                </p>
                            </div>

                            <div className="post-item clearfix">
                                <img src={ process.env.PUBLIC_URL + "/assets/img/news-3.jpg" } alt="" />
                                <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                                <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...
                                </p>
                            </div>

                            <div className="post-item clearfix">
                                <img src={ process.env.PUBLIC_URL + "/assets/img/news-4.jpg" } alt="" />
                                <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                                <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...
                                </p>
                            </div>

                            <div className="post-item clearfix">
                                <img src={ process.env.PUBLIC_URL + "/assets/img/news-5.jpg" } alt="" />
                                <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                                <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                            </div>*/}
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </>
    );
}
 
export default SectionRender;