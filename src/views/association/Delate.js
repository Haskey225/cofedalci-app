import React from "react";

import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
} from '@coreui/react';

const DelateAssociation = () => {

    return(
        <CRow>
            <CCol md={12}>
                <CCard>
                    <CCardHeader>
                        <strong>{"Suppression de l'association"}</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p>{"Page de suppresion de l'association"}</p>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default DelateAssociation;