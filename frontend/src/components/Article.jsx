import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { BsSubtract } from 'react-icons/bs';
/**
 * Article.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 8/14/24
 * @param   :
 * @version : 1.0.0
 */
const BsContainer = (props) => {
    const
        children = props.children,
        className = props.className;
    return(
        <section className={ className }>
            <Row>{ children }</Row>
        </section>
    );
};

const BsCardText = ({ children }) => {
    return(<Card.Text>{ children }</Card.Text>);
};

const BsCardSubTitle = ({ text }) => {
    return(<Card.Subtitle className="mb-2 text-muted">{ text }</Card.Subtitle>);
};

const BsCard = (props) => {
    const { col, title, subtitle, image, children } = props;
    return (
        <Col lg={ col }>
            <Card>
                {(image && Object.is(image.variant, 'top')) &&
                <Card.Img
                    variant={ image.variant }
                    src={ process.env.PUBLIC_URL + image.src }
                />
                }
                <Card.Body>
                    <Card.Title>
                        <BsSubtract /> { title }
                    </Card.Title>

                    {(subtitle) && <BsCardSubTitle text={ subtitle } />}

                    { (children) && children }
                </Card.Body>
                {(image && Object.is(image.variant, 'bottom')) &&
                <Card.Img
                    variant={ image.variant }
                    src={ process.env.PUBLIC_URL + image.src }
                />
                }
            </Card>
        </Col>
    );
};

const BsImage = (props) => {
    return(
        <Col>
            <Image
                {...props}
            />
        </Col>
    );
};

export { BsContainer, BsCard, BsCardText, BsImage };