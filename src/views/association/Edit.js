import React from "react";
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
} from '@coreui/react';

const EditAssociation = () => {

    return(
        <CRow className="mb-4">
            <CCol md={12}>
                <CCard>
                    <CCardHeader>
                        <strong>Modification des association</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p>Page de modification des associations</p>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default EditAssociation;