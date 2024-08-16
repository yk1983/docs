import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Table from 'react-bootstrap/Table';
/**
 * Table.jsx
 * @description
 *
 * @author  : yongkim
 * @since   : 8/15/24
 * @param   :
 * @version : 1.0.0
 */
const BsTable = (props) => {

    const {
        striped
    ,   bordered
    ,   hover
    ,   size="sm"
    ,   variant="dark"
    ,   columns
    ,   data
    } = props;

    return (
        <Table
            striped
            bordered
            hover
            size={ size }
            variant={ variant }
        >
            <thead>

            </thead>
            <tbody>

            </tbody>
        </Table>
    );
}

export default BsTable;