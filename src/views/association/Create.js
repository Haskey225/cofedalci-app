import React from "react";
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,

} from '@coreui/react';


const CreateAssociation = () => {

    return(
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <strong>{"Creation de l'association"}</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p>{"Page de creation de l'association"}</p>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default CreateAssociation;