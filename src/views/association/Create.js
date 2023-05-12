import React from "react";
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CFormTextarea,
    CFormSelect,

} from '@coreui/react';


const CreateAssociation = () => {

    return (
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <strong>{"Creation de l'association"}</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CCol md={12}>
                            <CRow>
                                <CCol md={6} className="mb-4">
                                    <CInputGroup>
                                        <CInputGroupText>Nom</CInputGroupText>
                                        <CFormInput />
                                    </CInputGroup>
                                </CCol>
                                
                                <CCol md={6} className="mb-4">
                                    <CInputGroup>
                                        <CInputGroupText>Fédération parente</CInputGroupText>
                                        <CFormSelect>
                                            <option>Selectionnez la fed parente</option>
                                            <option>Fed 1</option>
                                            <option>Fed 2</option>
                                        </CFormSelect>
                                    </CInputGroup>
                                </CCol>
                                <CCol md={12} className="mb-4">
                                    <CInputGroup>
                                        <CInputGroupText>Description</CInputGroupText>
                                        <CFormTextarea />
                                    </CInputGroup>
                                </CCol>
                            </CRow>
                        </CCol>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default CreateAssociation;