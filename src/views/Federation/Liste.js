import React from 'react';

import {
    CCard,
    CCardHeader,
    CCardBody,
    CTable,
    CTableRow,
    CTableHead,
    CTableBody,
    CTableDataCell,
    CRow,
    CCol,
} from '@coreui/react';
import { federation } from 'src/Functions/Constants';

const ListeFederation = () => {

    return (
        <CRow>
            <CCol md={12}>
                <CCard className='mb-4'>
                    <CCardHeader>
                        <strong>Liste des federation</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CTable>
                            <CTableHead >
                                <CTableRow>
                                    <CTableDataCell>id</CTableDataCell>
                                    <CTableDataCell>Shot name</CTableDataCell>
                                    <CTableDataCell>Full name</CTableDataCell>
                                    <CTableDataCell>President</CTableDataCell>
                                    <CTableDataCell>Branch</CTableDataCell>
                                    <CTableDataCell>Description</CTableDataCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {federation && federation.map((item, index) => (
                                    <CTableRow key={index}>
                                        <CTableDataCell>{item.id}</CTableDataCell>
                                        <CTableDataCell>{item.shirt_name}</CTableDataCell>
                                        <CTableDataCell>{item.full_name}</CTableDataCell>
                                        <CTableDataCell>{item.president_id}</CTableDataCell>
                                        <CTableDataCell>{item.branch_id}</CTableDataCell>
                                        <CTableDataCell>{item.description}</CTableDataCell>
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ListeFederation