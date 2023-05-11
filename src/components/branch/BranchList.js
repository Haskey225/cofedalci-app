import React from "react";
import {
    CTableRow,
    CTableDataCell,
} from '@coreui/react';

export  function BranchListCard(props) {
    // const { item } =  props;
    // console.log(item.id);
   
        return (
            <CTableRow>
                <CTableDataCell scope="row">name</CTableDataCell>
                <CTableDataCell>name</CTableDataCell>
                <CTableDataCell>name</CTableDataCell>
                <CTableDataCell>Nbrs de Fed</CTableDataCell>
            </CTableRow>
        )
}