import React from "react";
import {
    CForm,
    CRow,
    CCard,
    CCardHeader,
    CCardBody,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell,
    CTableBody,
    CCol,
    CButton,
} from "@coreui/react";

const ListBranche = () => {

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CButton >Abouter une branche</CButton>
                    <CCardHeader>
                        <strong>Branches</strong>
                    </CCardHeader>
                    <CCardBody>
                        
                        <CTable>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">id</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Nom</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Nbrs de Fed</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>Branche 1</CTableDataCell>
                                    <CTableDataCell>....</CTableDataCell>
                                    <CTableDataCell>2</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                    <CTableDataCell>Branche 2</CTableDataCell>
                                    <CTableDataCell>...</CTableDataCell>
                                    <CTableDataCell>5</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                    <CTableDataCell>Branche 3</CTableDataCell>
                                    <CTableDataCell>...</CTableDataCell>
                                    <CTableDataCell>1</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ListBranche