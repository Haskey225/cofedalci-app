import React from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react';

export default function Create(){

    return(

        <CRow>
            <CCol md={12}>
                <CCard>
                    <CCardHeader>
                        <strong>Creation de président de association</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <p>Page d ajout de president</p>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}