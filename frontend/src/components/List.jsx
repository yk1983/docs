import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BsJournalText, BsHash } from 'react-icons/bs';
/**
 * List.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 8/14/24
 * @param   :
 * @version : 1.0.0
 */
const LiItem = (props) => {
    const {
        key
    } = props;

    const value = (props.children) ? props.children : props.value;

    return <li key={ key }>{ value }</li>;
};

const DtItem = (props) => {
    const value = (props.children) ? props.children : props.value;
    return(
        <dt>
            <BsHash /> { value }
        </dt>
    );
};

const DdItem = (props) => {
    const value = (props.children) ? props.children : props.value;
    return <dd>{ value }</dd>;
};

const OlList = (props) => {
    const {
        reversed = false
    ,   start = 1
    ,   type = "1" /* 1, A, a, I, i */
    ,   items
    ,   header
    ,   children
    } = props;
    const listItems = []

    if (items && items.length > 0) {
        listItems.push(items.map((item, index) =>
            <LiItem value={ item } key={ index } />
        ));
    }

    return (
        <>
            {(header) && <h6><BsJournalText /> { header }</h6>}
            <ol
                reversed={ reversed }
                start={ start }
                type={ type }
            >{ (children) ? children : listItems }
            </ol>
        </>
    );
};

const UlList = (props) => {
    const {
            type = 'disc' /* disc, square, circle */
        ,   items
        ,   header
        ,   children
        } = props,
        style = {
            listStyleType : type
        };

    let listItems = [];
    if (items && items.length > 0) {
        listItems.push(items.map((item, index) =>
            <LiItem value={ item } key={ index } />
        ));
    }

    return (
        <>
            {(header) && <h6><BsJournalText /> { header }</h6>}
            <ul
                style={ style }
            >{ (children) ? children : listItems }
            </ul>
        </>
    );
};

const DlList = (props) => {
    const {
        items
    ,   header
    ,   children
    } = props;

    let listItems = [];
    if (!children) {
        items.map((item, index) => {
            listItems.push(
                <>
                    <DtItem value={ item.term } key={ index } />
                    <DdItem value={ item.description } key={ index } />
                </>
            );
        });
    }

    return (
        <>
            {(header) &&
            <h6><BsJournalText /> { header }</h6>
            }
            <dl>{ (children) ? children : listItems }</dl>
        </>
    );
};

export { OlList, UlList, LiItem, DlList, DtItem, DdItem };