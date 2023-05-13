import React from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CInputGroup,
    CInputGroupText,
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
                            <CCol md={6}>
                                <CInputGroup>
                                    <CInputGroupText>Nom</CInputGroupText>
                                    <CFormInput name='asso_name' />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6}>
                                <CInputGroup>
                                    <CInputGroupText>Federation</CInputGroupText>
                                    <CFormSelect name="fed_name">
                                        <option>Federation</option>
                                        <option>FED 1</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={12}>
                                <CInputGroup>
                                    <CInputGroupText>Description</CInputGroupText>
                                    <CFormTextarea name="description" />
                                </CInputGroup>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}