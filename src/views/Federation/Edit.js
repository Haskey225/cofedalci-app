import React from "react";
import { 
    CCard, 
    CCardBody, 
    CCardHeader, 
    CCol, 
    CRow,
 } from '@coreui/react';

const EditFederation =  () => {

    return(
        <CRow>
            <CCol className="mb-4">
                <CCard>
                    <CCardHeader>
                        <strong>Modifier la fedaration</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p>Modifier la federation</p>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default EditFederation;