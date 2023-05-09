import React from "react";

import {
    CCard,
    CCardHeader,
    CCardBody,
    CRow,
    CCol,
    CTable,
    CTableHead,
    CTableRow,
    CTableDataCell,
    CTableBody,
} from '@coreui/react'

const ListeAssociation = () => {

    return(
        <CRow>
            <CCol md={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Liste des Association</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CTable>
                            <CTableHead>
                                <CTableRow>
                                    <CTableDataCell>id</CTableDataCell>
                                    <CTableDataCell>name</CTableDataCell>
                                    <CTableDataCell>president id</CTableDataCell>
                                    <CTableDataCell>federation id</CTableDataCell>
                                    <CTableDataCell>description</CTableDataCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>Tailler</CTableDataCell>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>5</CTableDataCell>
                                    <CTableDataCell>Pour les couturier et services relatifs</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ListeAssociation