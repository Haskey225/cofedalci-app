import React, { useState } from "react";
import {
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
} from "@coreui/react";
import { getBranchListe } from "src/Functions/Datas";
import BranchListCard from "src/components/branch";

const item = {
    id: 1,
    name: 'Franck ABo',
    descriptions: 'moi meme'
}
const ListBranche = () => {

    getBranchListe().then(respo => {
        console.log(respo)
    })

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
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
                                <BranchListCard  item={item} />
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default ListBranche