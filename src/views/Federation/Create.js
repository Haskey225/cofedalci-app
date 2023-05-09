import React from "react";

import {
    CCard,
    CCardHeader,
    CCardBody,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
    CCol,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CButton
} from "@coreui/react";

const FederationCreate = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Creer une federation</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Short Name</CInputGroupText>
                                    <CFormInput />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Full Name</CInputGroupText>
                                    <CFormInput />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>President</CInputGroupText>
                                    <CFormSelect placeholder="Selectionner une president">
                                        <option>Coul</option>
                                        <option>Coul</option>
                                        <option>Coul</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Branche</CInputGroupText>
                                    <CFormSelect>
                                        <option>Branche1</option>
                                        <option>Branche1</option>
                                        <option>Branche1</option>
                                        <option>Branche1</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={12} className="mb-4">
                                <CFormLabel htmlFor="description"></CFormLabel>
                                <CFormTextarea id="description" />
                            </CCol>
                            <CCol md={12}>
                                <CButton>Creer</CButton>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default FederationCreate