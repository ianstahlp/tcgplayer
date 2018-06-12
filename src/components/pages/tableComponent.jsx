import React, { Component } from 'react';

import TableHead from '../Table/tableHead/tableHeadContainer';
import TableBody from '../Table/tableBody/tableBodyContainer';

export default class Table extends Component {

    render() {
        return <table class="table table-hover table-dark">
        <TableHead />
        <TableBody />
    </table>
    }
}