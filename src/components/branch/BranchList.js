import React from "react";
import {
    CTableRow,
    CTableDataCell,
} from '@coreui/react';

export  function BranchListCard(props) {
    const { item } =  props;
    console.log(item.id);
    // if(item){
    //     return (
    //         <CTableRow>
    //             <CTableDataCell scope="row">{item.id}</CTableDataCell>
    //             <CTableDataCell>{item.name}</CTableDataCell>
    //             <CTableDataCell>{item.descriptions}</CTableDataCell>
    //             <CTableDataCell>Nbrs de Fed</CTableDataCell>
    //         </CTableRow>
    //     )
    // }else{
    //     <p>Attente</p>
    // }
}