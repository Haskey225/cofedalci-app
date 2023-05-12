import React from "react";
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
} from '@coreui/react';

export default function liste(){
    return(
        <CRow>
            <CCol md={12}>
                <CCard>
                    <CCardHeader>
                        <strong>Liste des president d association</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CTable>
                            <CTableHead>
                                <CTableDataCell>ID</CTableDataCell>
                                <CTableDataCell>Nom</CTableDataCell>
                                <CTableDataCell>Contact</CTableDataCell>
                                <CTableDataCell>Asso ID</CTableDataCell>
                            </CTableHead>
                            <CTableBody>
                                <CTableDataCell>2</CTableDataCell>
                                <CTableDataCell>Stella Estel</CTableDataCell>
                                <CTableDataCell>0505424252</CTableDataCell>
                                <CTableDataCell>2</CTableDataCell>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}