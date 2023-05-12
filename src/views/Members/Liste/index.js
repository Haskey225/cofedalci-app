import React, {useState} from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableRow,
} from '@coreui/react';


export default function Liste(){

    return(
        <CRow>
            <CCol md={12}>

                <CCard>
                    <CCardHeader>
                        <strong>Liste des membres</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CTable>
                            <CTableHead>
                                <CTableRow>
                                    <CTableDataCell>ID</CTableDataCell>
                                    <CTableDataCell>Name</CTableDataCell>
                                    <CTableDataCell>Contact</CTableDataCell>
                                    <CTableDataCell>Asso ID</CTableDataCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>Test</CTableDataCell>
                                    <CTableDataCell>05050505</CTableDataCell>
                                    <CTableDataCell>5</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>

            </CCol>
        </CRow>
    )
}