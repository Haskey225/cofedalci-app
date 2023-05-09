import React from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,

} from '@coreui/react';

const DeleteFederation = () => {

    return(
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <strong>Supprimer la federation</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p>Page de suppression de la federation</p>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default DeleteFederation;